import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem';

export default function CartList() {
  const { cart, dispatch } = useContext(CartContext);
  return(
  <div className='cart'>
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
      <p>Cart is Empty</p>
    ) : (
      <>
        <ul>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

        </ul>
        <button className='btn clear' onClick={() => dispatch({ type: "RESET" })}>
          clear Cart
        </button>
      </>

    )}


  </div>
  );
}


