import React from 'react'
import StyledNavbar, { NavbarOption, NavbarOptions, NavbarTitle } from '../styles/StyledNavbar'
import passwordIcon from '../assets/shield_lock_main.svg'
import Button from './Button'
import { MdLogout } from 'react-icons/md'
import { FloatingActionButton } from '../styles/StyledButton'

const Navbar = () => {
  return (
    <StyledNavbar>
        <NavbarTitle>
            <img src={passwordIcon} className="logo_icon" />
            <span>PasswordSecure</span>
        </NavbarTitle>
        <NavbarOptions>
            <NavbarOption>
                <a href='#'>Home</a>
                <div></div>
            </NavbarOption>
            <NavbarOption>
                <a href='#'>Settings</a>
                <div></div>
            </NavbarOption>
        </NavbarOptions>
        <FloatingActionButton size={35}>
            <MdLogout />
        </FloatingActionButton>
    </StyledNavbar>
  )
}

export default Navbar