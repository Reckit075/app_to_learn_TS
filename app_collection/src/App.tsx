import React from 'react';
import './App.css';
import ItemContainer from './components/ItemsContainer'
import {NewItemModal} from './newItemModal/NewItemModal';
import Item from './components/item/item';

function App() {
  return (
    <div className="App">
        <ItemContainer />
     <NewItemModal />
      <Item title='Ksiazka testowa' author='Przykładowy autor' description='Ten tekst na mieć mniej niż 60 znaków'/>
    </div>
  );
}

export default App;
