import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [username, setUsername] = useState(null);
  const login = (username) => {
    const token = `fake-token-${username}`;
    localStorage.setItem('authToken', token);
    setUsername(username);
  };
  const logout = () => {
    localStorage.removeItem('authToken');
    setUsername(null);
  };
  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => useContext(AuthContext);
