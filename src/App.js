import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';

import NavBar from './components/NavBar/NavBar.component';
import Footer from './components/Footer/Footer.component';

import { fetchAllShoesStart } from './redux/shop/shop.actions';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShoesStart());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact={true} path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route path='/products/:productId' component={ ProductDetailsPage } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
