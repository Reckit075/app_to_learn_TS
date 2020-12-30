import React from 'react';
import {NewItemModal} from './components/newItemModal';
import ItemContainer from './components/ItemsContainer';
import Item from './components/item';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Test = () => {
  return (
    <Item title="asd" author="asd" description="asd"/>
  )
}

const App = () => {
  return (
    <div className="App">
        {/* <ItemContainer />
        <NewItemModal />
      <Item title='Ksiazka testowa' author='Przykładowy autor' description='Ten tekst na mieć mniej niż 60 znaków'/> */}
      
      <Router>
        <ul>
          <li><Link to="/item">item</Link></li>
          <li><Link to="/itemcontainer">item container</Link></li>
          <li><Link to="/colections">colections</Link></li>
        </ul>

        <Route path="/item" component={Test} />
        <Route path="/itemcontainer" component={ItemContainer} />
        <Route path="/colections" component={NewItemModal} />
      </Router>

    </div>
  );
}

export default App;