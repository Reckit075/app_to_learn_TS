import React from 'react';
import {NewItemModal} from './components/newItemModal';
import ItemContainer from './components/ItemsContainer';
import Item from './components/item';

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