import React, { Component, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import useGoogleUser from './firebase/hooks';
import './App.css';

import { auth } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-footer/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-up.component';

const App = () => {
  
  const currentUser = useGoogleUser();
  console.log(currentUser);

  return (
    <div>
      <Header currentUser />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}


export default App;