import React, { useEffect, useRef, useState } from 'react'
import TextField from '../components/TextField'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import {useNavigate} from 'react-router-dom'
import Text from '../styles/StyledText'
import { MdPerson } from 'react-icons/md'
import { MdEmail, MdPassword } from 'react-icons/md'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineKey } from 'react-icons/ai'
import StyledLabel from '../styles/StyledLabel'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../data/actions/UserActions'
import ErrorDisplay from '../components/ErrorDisplay'
import AutoGenerateField from '../components/AutoGenerateField'

const Login = () => {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const encryptionKeyRef = useRef()
    const dispatch = useDispatch()
    const userState = useSelector(state => state.userReducer)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        console.log(userState)
        if (userState.error) {
            setShow(true)
        }
        if (userState.data) {
            navigate('/dashboard')
        }
    }, [userState])

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: usernameRef.current.value,
            password: passwordRef.current.value,
            encryptionKey: encryptionKeyRef.current.value
        }
        dispatch(loginUser(data))
    }
  return (
    <FlexContainer background='primary' >
        <ErrorDisplay error={userState.error} show={show} setShow={setShow} />
        <Box background='white' height='fit-content' padding='20px' borderRadius='10px' width='480px'>
            <form className='form' onSubmit={onSubmit}>
                <Text variant='h3' as='h3'>Login</Text>
                <div className='divider'></div>
                <StyledLabel width='100%' htmlFor='username' className='mt-10'>
                    <Text variant='caption' as='label'>Username or Email</Text>
                    <TextField icon={MdPerson} variant='outlined' reference={usernameRef}></TextField>
                </StyledLabel>
                <StyledLabel width='100%' htmlFor='password' className='mt-10'>
                    <Text variant='caption' as='label'>Password</Text>
                    <TextField type='password' endIcon={AiOutlineEye} icon={MdPassword} variant='outlined' reference={passwordRef} onEndIconClick={() => {}}></TextField>
                </StyledLabel>
                <StyledLabel width='100%' htmlFor='password' className='mt-10'>
                      <Text variant='caption' as='label'>Encryption key (This will be used to encrypt your passwords by default)</Text>
                      <TextField icon={AiOutlineKey} variant='outlined' reference={encryptionKeyRef} onEndIconClick={() => {}}></TextField>
                      <AutoGenerateField field={'Key'} setPassword={(p) => {encryptionKeyRef.current.value = p}} />
                      <Text variant='caption' as='p'>You can leave this empty if this is not your first time</Text>
                  </StyledLabel>
                <FlexContainer padding='0' margin='10px 0 0 0' justifyContent='space-between'>
                    <Button onClick={onSubmit} variant={'elevated'}>Login</Button>
                    <span className='span'>(If you don't have an account, one will be created)</span>
                </FlexContainer>
            </form>
        </Box>
    </FlexContainer>
  )
}

export default Login