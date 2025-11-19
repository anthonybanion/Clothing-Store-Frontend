import { authService } from './authService';

class TokenInterceptor {
  constructor() {
    this.isRefreshing = false;
    this.failedQueue = [];
  }

  async handleUnauthorized(error) {
    // Si ya estamos refrescando, encolar la petición
    if (this.isRefreshing) {
      return new Promise((resolve, reject) => {
        this.failedQueue.push({ resolve, reject });
      });
    }

    this.isRefreshing = true;

    try {
      const refreshToken = localStorage.getItem('refreshToken');

      if (!refreshToken) {
        this.redirectToLogin();
        return Promise.reject(error);
      }

      // Intentar refrescar el token
      const result = await authService.refreshToken(refreshToken);

      if (result && result.data && result.data.accessToken) {
        localStorage.setItem('accessToken', result.data.accessToken);

        // Procesar cola de peticiones fallidas
        this.failedQueue.forEach(({ resolve }) => resolve());
        this.failedQueue = [];

        return true;
      } else {
        throw new Error('Invalid refresh response');
      }
    } catch (refreshError) {
      console.error('Token refresh failed:', refreshError);

      // Rechazar todas las peticiones en cola
      this.failedQueue.forEach(({ reject }) => reject(refreshError));
      this.failedQueue = [];

      this.redirectToLogin();
      return false;
    } finally {
      this.isRefreshing = false;
    }
  }

  redirectToLogin() {
    // Limpiar tokens
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Redirigir al login
    window.location.href = '/login';
  }
}

export const tokenInterceptor = new TokenInterceptor();
