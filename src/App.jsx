import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import CreatePasssword from './pages/CreatePasssword'
import Home from './pages/Home'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Box from './styles/StyledBox'

function App() {

  return (
      <Box height={'100vh'}>
        <Routes>
          <Route element={<HomeContainer />} path='dashboard'>
            <Route element={<Home />} path='/dashboard' />
            <Route element={<CreatePasssword />} path='create' />
            <Route element={<Settings />} path='settings' />
          </Route>
          <Route element={<Login />} path='/' />
        </Routes>
      </Box>
  )
}

export default App
