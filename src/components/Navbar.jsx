import React from 'react'
import StyledNavbar, { NavbarOption, NavbarOptions, NavbarTitle } from '../styles/StyledNavbar'
import passwordIcon from '../assets/shield_lock_main.svg'
import Button from './Button'
import { MdLogout } from 'react-icons/md'
import { FloatingActionButton } from '../styles/StyledButton'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname.replace('/dashboard', '');
    const isCreate = path.includes('create');
    const isSettings = path.includes('settings')
  return (
    <StyledNavbar>
        <NavbarTitle>
            <img src={passwordIcon} className="logo_icon" />
            <span>PasswordSecure</span>
        </NavbarTitle>
        <NavbarOptions>
            <NavbarOption>
                <NavLink className={(props) => props.isActive ? 'active' : ''} to='/dashboard'>Home</NavLink>
                <div className={!isSettings && !isCreate && 'active'}></div>
            </NavbarOption>
            <NavbarOption>
                <NavLink className={(props) => props.isActive ? 'active' : ''} to='create'>Create</NavLink>
                <div className={isCreate && 'active'}></div>
            </NavbarOption>
            <NavbarOption>
                <NavLink className={(props) => props.isActive ? 'active' : ''} to='settings'>Settings</NavLink>
                <div className={isSettings && 'active'}></div>
            </NavbarOption>
        </NavbarOptions>
        <FloatingActionButton size={35}>
            <MdLogout />
        </FloatingActionButton>
    </StyledNavbar>
  )
}

export default Navbar