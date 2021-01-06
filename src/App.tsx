import React from 'react';
import './index.scss';
import Header from './components/header';
import ItemsContainer from './components/ItemsContainer';
import Footer from './components/footer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <ItemsContainer collectionTitle="movies" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
