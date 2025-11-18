// services/auth/loginService.js
import { apiRequest } from '../api';

// Login request to backend
export async function loginService(username, password) {
  return await apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
}
