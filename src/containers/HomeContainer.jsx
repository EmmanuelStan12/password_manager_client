import React from 'react'
import Navbar from '../components/Navbar'
import Box from '../styles/StyledBox'
import { Outlet } from 'react-router-dom'
import FlexContainer from '../styles/StyledFlexContainer'
import Home from '../pages/Home'

const HomeContainer = () => {
  return (
    <Box>
        <Navbar />
        <Home />
        <Outlet />
    </Box>
  )
}

export default HomeContainer