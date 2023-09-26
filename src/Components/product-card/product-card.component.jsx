import React from 'react'
import { CartContext } from '../../context/cart.context'
import { useContext } from 'react'
import './product-card.styles.scss'
import Button from '../Button/button.component'

const ProductCard = ({product}) => {
    const {name,imageUrl,price} = product
    const {addItemToCart} = useContext(CartContext)
    

    const AddProductToCart = () => addItemToCart(product);


  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    <Button buttonType='inverted' onClick={AddProductToCart}>Add to Cart</Button>
    </div>
  )
}

export default ProductCard
