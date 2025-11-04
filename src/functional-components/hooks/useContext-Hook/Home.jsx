import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const Home = () => {

    const {darkMode , toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <h1>{darkMode ? 'dark Mode 🌑' : 'light Mode 🌟'}</h1>
      <button onClick={toggleTheme}>click here</button>
    </div>
  )
}

export default Home
