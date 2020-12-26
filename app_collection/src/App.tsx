import React from 'react';
import './App.css';
import Item from './components/item/item';

function App() {
  return (
    <div className="App">
      <Item title='Ksiazka testowa' author='Przykładowy autor' description='Ten tekst na mieć mniej niż 60 znaków'/>
    </div>
  );
}

export default App;
