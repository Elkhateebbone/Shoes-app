import React, { useContext } from 'react'
import { ShopContext } from '../Shop-Context';

export const CartItem = (props) => {
    const {cartItems,AddToCart,RemoveFromCart,updateCartItem} = useContext(ShopContext);

    const{id,productName,price,prodctImage} = props.data;
        return (
            
                <div className="cart-item">
                  <img className="cart-item-image" src={prodctImage} />
                  <div className="description">
                    <p><b>{productName}</b></p>
                    <p>${price}</p>
                    <div className="counthandler">
                        <button onClick={()=>RemoveFromCart(id)}>-</button>
                        <input value={cartItems[id]} onChange={(e)=>updateCartItem(Number(e.target.value),id)}/>
                        <button onClick={()=>AddToCart(id)}>+</button>

                    </div>
                  </div>
                </div>
              );
              
      
}
