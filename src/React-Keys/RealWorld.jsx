import React from 'react'

const RealWorld = () => {

    const products =[
        {id:'p1',name: 'tshirt'},
        {id:'p2',name: 'joggers'},
        {id:'p3',name: 'pants'},
        {id: 'p4',name: 'shirts'},
        {id: 'p5',name: 'trousers'},


    ]
  return (
    <div>
      <ul>
        {products.map(prdt => (
            <li key={prdt.id}>{prdt.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RealWorld
