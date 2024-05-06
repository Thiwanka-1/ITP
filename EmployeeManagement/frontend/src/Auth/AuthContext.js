import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Load user from localStorage on initialization
    }
  }, []);

  const login = (userData) => {
    setUser(userData); // Update authentication state
    localStorage.setItem('user', JSON.stringify(userData)); // Store in localStorage
  };

  const logout = () => {
    setUser(null); // Reset authentication state
    localStorage.removeItem('user'); // Clear from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
