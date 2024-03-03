import React, { useContext } from 'react'

import { ShopContext } from '../Shop-Context';



export const Product = (props) => {
  const {cartItems,AddToCart,RemoveFromCart,updateCartItem} = useContext(ShopContext);

  const{id , productName,price,prodctImage} = props.data;
    
const cartItemsAmount = cartItems[id]
  return (
    <div className='product'>
        
    <img src={prodctImage}/>
    <div className='description'>
        <p>{productName}</p>
        <p>${price}</p>
    </div>
     <button className='addToCartButton' onClick={() => AddToCart(id)}>
            Add To Cart {cartItemsAmount>0 && <>({cartItemsAmount})</>}
        </button>
    {/* <button className='addToCartButton' onClick={() => AddToCart(id)}>
        Add To Cart {cartItemsAmount>0 && <>({cartItemsAmount})</>}
    </button> */}
        </div>
  )
}
export default Product