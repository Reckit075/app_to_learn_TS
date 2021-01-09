import React from 'react';

import Routers from './components/routers/Routers'

const App = () => {
  return (
    <div className="App">
        {/* <ItemContainer />
        <NewItemModal />
      <Item title='Ksiazka testowa' author='Przykładowy autor' description='Ten tekst na mieć mniej niż 60 znaków'/> */}
      <Routers />
    </div>
  );
}

export default App;