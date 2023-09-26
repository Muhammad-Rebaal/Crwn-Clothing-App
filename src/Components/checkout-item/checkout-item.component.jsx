import React from "react";
import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckOutItem = ({ cartItem }) => {
  const ClearItemHandler = () => clearItemFromCart(cartItem);
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const AddItemHandler = () => addItemToCart(cartItem);
  const RemoveItemHandler = () => removeItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={RemoveItemHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={AddItemHandler}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={ClearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckOutItem;
