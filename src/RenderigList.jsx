import React from 'react'

const RenderigList = () => {

    const fruits = ["Apple", "Banana", "Orange", "Mango"];
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default RenderigList
