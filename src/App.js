import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

import { fetchAllShoesStart } from './redux/shop/shop.actions';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShoesStart());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route path='/products/:productId' component={ SingleProductPage } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
