import React from 'react'
import StyledNavbar, { NavbarTitle } from '../styles/StyledNavbar'
import passwordIcon from '../assets/shield_lock_main.svg'

const Navbar = () => {
  return (
    <StyledNavbar>
        <NavbarTitle>
            <span>PasswordSecure</span>
        </NavbarTitle>
    </StyledNavbar>
  )
}

export default Navbar