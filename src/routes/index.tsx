import React, { FC, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Collection } from 'pages/Collection/Colletion';
import { Collections } from 'pages/Collections';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import Home from 'pages/Home/Home';

export const AuthRouter: FC = () => {
 return (
  <BrowserRouter>
   <Switch>
    <Route exact path="/collection" component={Collection} />
    <Route exact path="/colections" component={Collections} />
    <Redirect to="/collections" />
   </Switch>
  </BrowserRouter>
 );
};

export const UnauthRouter: FC = () => {
 return (
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Redirect to="/" />
   </Switch>
  </BrowserRouter>
 );
};
