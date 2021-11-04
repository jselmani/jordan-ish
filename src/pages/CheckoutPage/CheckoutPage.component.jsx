import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import "./CheckoutPage.styles.scss";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="checkout-page"
    >
      <h1 className="checkout-page-title">BAG</h1>
      {!cartItems.length ? (
        <h2 className="checkout-page-empty">
          NO JAY'S HERE. GO GET SOME, HOOPER.
        </h2>
      ) : (
        <div className="checkout-page-content">
          <div className="checkout-page-cart">
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.specificId} cartItem={cartItem} />
            ))}
          </div>
          <div className="checkout-page-summary">
            <h2 className="checkout-page-summary-title">SUMMARY</h2>
            <div className="checkout-page-subtotal">
              <span>SUBTOTAL</span>
              <span>${total}</span>
            </div>
            <div className="checkout-page-shipping">
              <span>ESTIMATED SHIPPING & HANDLING</span>
              <span>$0.00</span>
            </div>
            <div className="checkout-page-tax">
              <span>ESTIMATED TAX</span>
              <span>-</span>
            </div>
            <div className="checkout-page-total">
              <h2>TOTAL</h2>
              <h2>${total}</h2>
            </div>
            <div className="button-container">
              <CustomButton
                maxWidth
                onClick={() => console.log("Implement Stripe")}
              >
                PAY NOW
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CheckoutPage;
