import React from 'react';
import  { useContext } from 'react'

import { CartItem } from './CartItem';
import {useNavigate} from 'react-router-dom';
import PRODUCTS from '../products';
import { ShopContext } from '../Shop-Context';

export const CartShop = () => {
    const navigate = useNavigate();
    const {cartItems,getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    console.log("totalAmount =" + totalAmount )
  
    return (
      <div className='cart'>
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
          {PRODUCTS.map((Product)=>
          {
            if(
              cartItems[Product.id] !== 0)
              {
                return (<CartItem data={Product}/>)
              }
          })}
  
        </div>
        { totalAmount >0 ?
        <div className='chechout'>
          <p>SubTotal: ${totalAmount}</p>
          <button className='btn btn-primary' onClick={()=>navigate("/")}>Continue Shopping</button>
          <button className='btn btn-secondary' >Checkout</button>
        </div>:
        <h1>Your Cart is Empty</h1>
        }
       
      </div>
    )
}
export default CartShop
