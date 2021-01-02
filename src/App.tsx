import React from 'react';
<<<<<<< HEAD:src/App.tsx
=======
import './index.scss'
>>>>>>> StylingWebsite:app_collection/src/App.tsx
import {NewItemModal} from './components/newItemModal';
import ItemContainer from './components/ItemsContainer';
import Item from './components/item';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <ItemContainer />
      <NewItemModal />
      <Item title='Królestwo' author='Jo Nasebo' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique justo, vel commodo lorem interdum. Tortor dui eu laoreet tortor in pretium.'/>
      <Footer/>
    </div>
  );
}

export default App;