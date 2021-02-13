import React from 'react';
import './index.scss';
import { useAuthState } from 'auth/AuthState';
import AuthProvider from 'auth/authContext';
import { AuthRouter, UnauthRouter } from 'routes';
import Header from './components/header';
import Footer from './components/footer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
 const { user, status } = useAuthState();

 const Content = () => {
  console.log(status);
  return (
   <>
    {localStorage.getItem('token') && <AuthRouter />}
    {!localStorage.getItem('token') && <UnauthRouter />}
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
