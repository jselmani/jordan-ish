import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";

import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage.component";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUp.component";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.component";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.component";

import NavBar from "./components/NavBar/NavBar.component";
import Footer from "./components/Footer/Footer.component";

import ViewportProvider from "./contexts/viewportcontext";

import { fetchAllShoesStart } from "./redux/shop/shop.actions";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(fetchAllShoesStart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <ViewportProvider>
        <Toaster position="bottom-center" />
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/products/:productId"
            component={ProductDetailsPage}
          />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
        <Footer />
      </ViewportProvider>
    </div>
  );
};

export default App;
