import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Collection } from 'pages/Collection/Colletion';
import { Collections } from 'pages/Collections';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';

export const Router: FC = () => {
 const token = localStorage.getItem('token');

 return (
  <BrowserRouter>
   <Switch>
    <Route exact path="/collection" component={Collection} />
    <Route exact path="/colections" component={Collections} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    {!token && <Redirect to="/collection" />}
   </Switch>
  </BrowserRouter>
 );
};
