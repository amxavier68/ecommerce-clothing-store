import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header-footer/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';

const App = () => {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  )
}

export default App;
