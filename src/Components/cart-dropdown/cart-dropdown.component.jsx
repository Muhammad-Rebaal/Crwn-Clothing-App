import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './cart-dropdown.styles.scss'
import Button from '../Button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()
    const GotoCheckOutHandler = () => {
      navigate('/checkout')
    }

    return (
      <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
        <Button onClick={GotoCheckOutHandler}>GO TO CHECKOUT</Button>
      </div>
    );
  };
  
  export default CartDropdown;
