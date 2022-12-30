import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import CreatePasssword from './pages/CreatePasssword'
import Home from './pages/Home'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Box from './styles/StyledBox'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from './components/LoadingPage'
import { checkToken } from './data/actions/UserActions'

function App() {

  const userState = useSelector(state => state.userReducer)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(checkToken())
    } else if (location.pathname !== '/login') {
      navigate('/login', { replace: true })
    }
  }, [])

  return (
      <Box height={'100vh'}>
        {userState.loading && <LoadingPage />}
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
