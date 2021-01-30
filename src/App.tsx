import React from 'react';
import './index.scss';
import { Router } from 'routes';
import Header from './components/header';
import ItemsContainer from './components/ItemsContainer';
import Footer from './components/footer';
import Form from './components/form';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
 return (
  // <div className="App">
  //
  //  <div className="mainContent">
  //   <ItemsContainer collectionTitle="movies" />
  //  </div>
  //  <Form type="login" />
  //
  // </div>
  <>
   <Header />
   <Router />
   <Footer />
  </>
 );
}

export default App;
