import React, { useState } from 'react'

const NameForm = () => {
    const [name, setName] = useState('');



  return (
    <div>
      <input type="text"
      placeholder='Enter Your Name' 
      value={name}
      onChange={(e) => setName(e.target.value)}/>
      <p>Hello, {name || 'starnger'}!</p>
    </div>
  )
}

export default NameForm
