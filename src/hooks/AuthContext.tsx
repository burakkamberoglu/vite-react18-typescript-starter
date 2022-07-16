import React, { createContext, useContext, useEffect, useState } from 'react';

import { AuthContext, AuthContextModel } from '@/interfaces/IAuthContext';
type AuthContextType = {
  children?: React.ReactNode;
};

const Context = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC<AuthContextType> = ({ children }) => {
  const [user, setUser] = useState<AuthContextModel | boolean>(JSON.parse(localStorage.getItem('user')!) || false);

  const data = { user, setUser };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);
