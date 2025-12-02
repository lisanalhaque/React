import React from 'react'

import Header from './Header'
import ProductList from './ProductList'
import { CartContext, CartProvider } from './CartContext'
import CartList from './CartList'

function CartApp() {
  return (
    <CartProvider>
      <div className='app'>
        <Header/>
        <main>
          <ProductList/>
          <CartContext/>
          <CartList/>
        </main>
      </div>
    </CartProvider>
    // <CartProvider>
    //     <div className="app">
    //     <Header/>
    //     <main>
    //         <ProductList/>
    //         <CartContext/>
    //     </main>
    //     </div>
    // </CartProvider>
  )
}

export default CartApp
