import React from "react";
import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckOutItem from "../../Components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, addItemToCart, cartItem, removeItemFromCart,cartTotal } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((items) =>
          <CheckOutItem cartItem={items} key={items.id}/>
      )}
      <span className="total">{`Total: $${cartTotal}`}</span>
    </div>
  );
};

export default Checkout;
