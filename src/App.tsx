import React from 'react';
import './index.scss';
import Header from './components/header';
import ItemsContainer from './components/ItemsContainer/';
import Footer from './components/footer'
import Routers from 'components/routers/Routers';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routers />
      <div className="mainContent">
        <ItemsContainer collectionTitle='movies'/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;