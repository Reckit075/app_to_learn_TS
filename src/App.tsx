import React, { useEffect } from 'react';
import './index.scss';
import { useAuthState } from 'auth/AuthState';
import AuthProvider from 'auth/authContext';
import { AuthRouter, UnauthRouter } from 'routes';
import { Redirect, BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
 const Content = () => {
  const { user, status } = useAuthState();
  return (
   <>
    {user && <AuthRouter />}
    {!user && <UnauthRouter />}
   </>
  );
 };

 return (
  <>
   <Header />
   <AuthProvider>
    <Content />
   </AuthProvider>
   <Footer />
  </>
 );
}

export default App;
