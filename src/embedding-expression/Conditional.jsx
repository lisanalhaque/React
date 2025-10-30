import React from 'react'

const Conditional = () => {
    const isLoggedIn = true;
  return (
    <div>
      <p>{isLoggedIn ? "Welcome back, user!" : "Please log in."}</p>
    </div>
  )
}

export default Conditional
