import React from 'react'
import Navbar from '../components/Navbar'
import Box from '../styles/StyledBox'
import { Outlet } from 'react-router-dom'

const HomeContainer = () => {
  return (
    <Box>
        <Navbar />
        <Outlet />
    </Box>
  )
}

export default HomeContainer