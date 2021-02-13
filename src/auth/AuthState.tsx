import React, { useContext } from 'react';
import { AuthContext } from './authContext';

export const useAuthState = () => {
 const state = React.useContext(AuthContext);
 const isPending = state?.status === 'pending';
 const isError = state?.status === 'error';
 const isSuccess = state?.status === 'success';
 const isAuthenticated = state?.user && isSuccess;

 return {
  ...state,
  isPending,
  isError,
  isSuccess,
  isAuthenticated,
 };
};
