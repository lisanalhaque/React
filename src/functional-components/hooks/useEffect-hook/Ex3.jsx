import React, { useEffect, useState } from 'react'

function Ex3() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`count changed to ${count}`);
    },[count]);
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Ex3
