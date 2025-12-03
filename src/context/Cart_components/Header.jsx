import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function Header() {
  const { cart } = useContext(CartContext);

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  
  return (
    <div>
      
    </div>
  )
}

export default Header
