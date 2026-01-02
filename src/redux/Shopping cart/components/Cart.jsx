import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementQty, decrementQty, removeFromCart } from '../slices/cartSlice'

function Cart() {

  const cart = useSelector((state) => state.cart ?? []);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <h4 className='mt-3'>Cart is empty </h4>;
  }

  return (
    <div className='mt-4'>
      <h4>Shopping Cart</h4>

      <ul className="list-group">
        {cart.map((item) => (
          <li 
            key={item.id} 
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{item.title}</h5>
              <p>${item.price} × {item.quantity}</p>

              <div>
                <button
                  className="btn btn-sm btn-secondary me-2"
                  onClick={() => dispatch(incrementQty(item.id))}
                >
                  +
                </button>

                <button
                  className="btn btn-sm btn-secondary me-2"
                  onClick={() => dispatch(decrementQty(item.id))}
                >
                  -
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>

            <span className="fw-bold">
              ${item.price * item.quantity}
            </span>
          </li>
        ))}
      </ul>

      <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>
    </div>
  )
}

export default Cart