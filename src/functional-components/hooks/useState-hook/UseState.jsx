import React from 'react'

const UseState = () => {
    const [count,setCount] = useState(0);//initial value
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
    </div>
  )
}
/* state is an internal data storethat belongs to a specific 
component and it can be changed over time */
export default UseState
