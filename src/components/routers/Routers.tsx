import React, {FC} from 'react'
import Item from '../item';
import {NewItemModal} from '../newItemModal';
import ItemsContainer from '../ItemsContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
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
          <Route path="/item" component={Test} />
          <Route path="/itemcontainer" component={ItemsContainer} />
          <Route path="/colections" component={NewItemModal} />
        </Switch>
        {!localStorage.getItem('token') && <Redirect to="/login"/>}
    </Router>
  )
}

export default Routers