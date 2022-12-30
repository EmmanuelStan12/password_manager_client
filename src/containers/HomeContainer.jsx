import React from 'react'
import Navbar from '../components/Navbar'
import Box from '../styles/StyledBox'
import { Outlet } from 'react-router-dom'
import FlexContainer from '../styles/StyledFlexContainer'
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import CreatePasssword from '../pages/CreatePasssword'

const HomeContainer = () => {
  return (
    <Box>
        <Navbar />
        <Outlet />
    </Box>
  )
}

export default HomeContainer