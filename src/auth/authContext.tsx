/* eslint-disable no-nested-ternary */
import userEvent from '@testing-library/user-event';
import React, { FC, createContext, useState, useEffect } from 'react';

interface IMessage {
 message?: string;
}

interface IAuthContext {
 user?: string;
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
  status: 'error',
  error: undefined,
 });

 useEffect(() => {
  // ---> loguje - pobiera token -> po 2h -> token wygasa -> ja odświeżam strone -> zostaje na /collections (tylko ze jest puste)
  // check token
  console.log('wykonuje się authcontext przypisanie user');
  // localStorage.get('token')
  // if (localStorage.getItem('token')) {
  setState({
   user: 'asd',
   status: true,
   error: undefined,
  });
  // }
  // if token is false do:
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
