import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../utils/ErrorBoundary';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-footer/header.component';

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;