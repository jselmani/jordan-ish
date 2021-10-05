import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";

import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage.component";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUp.component";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.component";

import NavBar from "./components/NavBar/NavBar.component";
import Footer from "./components/Footer/Footer.component";

import ViewportProvider from "./contexts/viewportcontext";

import { fetchAllShoesStart } from "./redux/shop/shop.actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShoesStart());
  }, [dispatch]);

  return (
    <div className="App">
      <ViewportProvider>
        <Toaster position="bottom-center" />
        <NavBar />
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/products/:productId"
              component={ProductDetailsPage}
            />
            <Route exact path="/signin" component={SignInSignUpPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </div>
        <Footer />
      </ViewportProvider>
    </div>
  );
};

export default App;
