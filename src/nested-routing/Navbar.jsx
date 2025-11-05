import React, { useState } from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen (!menuOpen)
  return (
    <nav>
        {/* logo */}
    <NavLink to='/' className='logo'>Mywebsite</NavLink>  

    {/* Hamberger menu icon  */}
    <div className='menu-icon' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>

    </div>

    {/* nav links  */}
    <ul className={menuOPen ? "show" : ""}>
        <li>
            <NavLink 
            to='/'
            className={(isActive)}></NavLink>
        </li>
    </ul>

    </nav>
  )
}

export default Navbar
