import React from 'react'

const Items = () => {

    const fruitItems = ['apple','Banana','orange'];

  return (
    <div>
      <ul>
        {fruitItems.map((itm, index) => (
            <li key={index}>{itm}</li>
        ))}
      </ul>
    </div>
  )
}

export default Items
