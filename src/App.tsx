import React from 'react';
import './index.scss';
import Header from './components/header';
import Footer from './components/footer'
import { BrowserRouter, Link, Redirect, Switch, Route } from 'react-router-dom';
import Item from './components/item';
import {NewItemModal} from './components/newItemModal';
import ItemsContainer from './components/ItemsContainer';
import { Login } from 'pages/Login/Login';

function App() {
  const Test = () => {
    return (
      <Item title="Testujemy" author="Props autora" description="props opisu"/>
    )
  }

  const routes =  <BrowserRouter>
                    <ul>
                      <li><Link to="/item">item</Link></li>
                      {/* <li><Link to="/itemcontainer">item container</Link></li> */}
                      <li><Link to="/colections">colections</Link></li>
                    </ul>
                    <Switch>
                      <Route path="/login" component={Login}/> {/* // page login */}
                      {localStorage.getItem('token') && <Route path="/item" component={Test} />}
                      {localStorage.getItem('token') && <Route path="/itemcontainer" component={ItemsContainer} /> } {/*  page ItemsContainer*/}
                      {localStorage.getItem('token') && <Route path="/colections" component={NewItemModal} />} {/* // page colection */}
                    </Switch>
                    {!localStorage.getItem('token') && <Redirect to="/login"/>}
                  </BrowserRouter>
  return (
    <div className="App">
      <Header/>
      {routes}
      {/* <div className="mainContent">
        <ItemsContainer collectionTitle='movies'/>
      </div> */}
      <Footer/>
    </div>
  );
}

export default App;