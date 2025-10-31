import React, { useState } from 'react'

const StateHw = () => {
// state initializing using useState hook
const [time, setTime] = useState(0);

// function to increment the time
const incrementTime = () => {
  setTime(time + 1);
}

const decrementTime = () => {
  setTime(time - 1);
}


  return (
    <div>
      <h1>Time: {time} seconds</h1>
      <button onClick={incrementTime}>Increment Time</button>
        <button onClick={decrementTime}>Decrement Time</button>
    </div>
  )
}

export default StateHw
