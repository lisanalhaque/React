import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import ProductList from '../../../context/Cart_components/ProductList'
import Cart from './Cart'

const ShoppingApp = () => {
  return (
    <Provider store={store}>
      <div className='container mt-4'>

      </div>
      <ProductList/>
      <Cart/>
    </Provider>
  )
}

export default ShoppingApp
