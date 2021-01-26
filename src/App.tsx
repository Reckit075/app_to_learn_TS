import React from 'react';
import './index.scss';
import Header from './components/header';
import ItemsContainer from './components/ItemsContainer/';
import Footer from './components/footer'
import Form from './components/form'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="mainContent">
        <ItemsContainer collectionTitle='movies'/>
      </div>
      <Form type={'login'} url={'login'}/>
      <Footer/>
    </div>
  );
}

export default App;