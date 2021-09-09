import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
