import React from 'react';

export type AuthContextModel = {
  id: number;
  userName: string;
};
export interface AuthContext {
  user: AuthContextModel | boolean;
  setUser: React.Dispatch<React.SetStateAction<AuthContextModel | boolean>>;
}
