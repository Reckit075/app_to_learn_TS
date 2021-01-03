import React from 'react';
import './index.scss';
import Header from './components/header';
import {NewItemModal} from './components/newItemModal';
import ItemContainer from './components/ItemsContainer';
import Item from './components/item';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="mainContent">
        <ItemContainer />
        <NewItemModal />
        <Item title='Królestwo' author='Jo Nasebo' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique justo, vel commodo lorem interdum. Tortor dui eu laoreet tortor in pretium.'/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;