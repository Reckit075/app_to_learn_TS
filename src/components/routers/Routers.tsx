import React, {FC} from 'react'
import PrivateRoute from './PrivateRoute'
import Item from '../item';
import {NewItemModal} from '../newItemModal';
import ItemsContainer from '../ItemsContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Routers: FC = () => {

  const Test = () => {
    return (
      <Item title="Testujemy" author="Props autora" description="props opisu"/>
    )
  }

  return (
    <Router>
        <ul>
          <li><Link to="/login">Zaloguj</Link></li>
          <li><Link to="/item">item</Link></li>
          {/* <li><Link to="/itemcontainer">item container</Link></li> */}
          <li><Link to="/colections">colections</Link></li>
        </ul>
        <Switch>
          {/* <Route path="/login" component={Login}/> */}
          <PrivateRoute path="/item" component={Test} />
          {/* <PrivateRoute path="/itemcontainer" component={ItemsContainer} /> */}
          <PrivateRoute path="/colections" component={NewItemModal} />
        </Switch>
    </Router>
  )
}

export default Routers