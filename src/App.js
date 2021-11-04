import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

import "./App.css";

import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage.component";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUp.component";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.component";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage.component";

import NavBar from "./components/NavBar/NavBar.component";
import Footer from "./components/Footer/Footer.component";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.component";
import Modal from "./components/Modal/Modal.component";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop.component";
import ViewportProvider from "./contexts/viewportcontext";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import { selectFavouriteModal } from "./redux/favourite/favourite.selectors";

import { ModalFlow } from "./helpers/ModalFlow";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const showFavouriteModal = useSelector(selectFavouriteModal);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <ViewportProvider>
        <AnimatePresence>
          <Toaster position="bottom-center" />
          <NavBar />
          {showFavouriteModal && <Modal modalFlow={ModalFlow.FAVOURITE_FLOW} />}
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
            <ProtectedRoute
              exact
              path="/favourites"
              currentUser={currentUser}
              component={FavouritesPage}
            />
          </Switch>
          <Footer />
        </AnimatePresence>
      </ViewportProvider>
    </div>
  );
};

export default App;
