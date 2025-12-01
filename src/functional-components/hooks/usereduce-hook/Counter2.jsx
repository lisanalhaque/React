import React, { useReducer } from 'react'
import counterReducer from '../../../Reducers/counterReducers'

const Counter2 = () => {
    const [state,dispatch]=useReducer(counterReducer)
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Count: {state.count}</h1>

      <button onClick={() => {dispatch({type:"increment"})}}>
        Increment
      </button>

      <button onClick={() => {dispatch({type:"decrement"})}}>
        Decrement
      </button>

      <button onClick={() => {dispatch({type:"Reset"})}}>
        Reset
      </button>
    </div>
  )
}

export default Counter2

