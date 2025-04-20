import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setAuth] = useState(false);

  // stubbed login/logout
  const login = (cb) => {
    // simulate async with a macrotask
    setTimeout(() => {
      setAuth(true);
      cb?.();
    }, 500);
  };
  const logout = (cb) => {
    setAuth(false);
    cb?.();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
