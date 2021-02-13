/* eslint-disable no-nested-ternary */
import userEvent from '@testing-library/user-event';
import React, { FC, createContext, useState, useEffect } from 'react';

interface IMessage {
 message?: string;
}

export interface IAuthContext {
 user?: string | null;
 status?: 'pending' | 'success' | 'error' | any;
 error?: IMessage;
}

interface IProps {
 children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>({});

const AuthProvider: FC<IProps> = ({ children }: IProps) => {
 const [state, setState] = useState<IAuthContext>({
  user: undefined,
  status: 'pending',
  error: undefined,
 });

 useEffect(() => {
  const userLocal = localStorage.getItem('token') ? localStorage.getItem('token') : null;
  setState({
   user: userLocal,
   status: 'success',
   error: undefined,
  });
 }, []);

 return (
  <AuthContext.Provider value={state}>
   {state.status === 'pending' ? (
    'Loading...'
   ) : state.status === 'error' ? (
    <div>
     Oh no
     <div>
      <pre>{state.error?.message}</pre>
     </div>
    </div>
   ) : (
    children
   )}
  </AuthContext.Provider>
 );
};

export default AuthProvider;
