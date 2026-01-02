import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import Cart from './Cart'
import ProductList from './ProductList'

const ShoppingApp = () => {
  return (
    <Provider store={store}>
      <div className='container mt-4'>
        <h1 className="text-center mb-4">SHOPPING CART</h1>
        <div className='row'>
          <ProductList />
          <div className='col-md-4'>
            <Cart />
          </div>
        </div>
      </div>

    </Provider>
  )
}

export default ShoppingApp
