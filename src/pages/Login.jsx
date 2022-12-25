import React, { useRef } from 'react'
import TextField from '../components/TextField'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import Text from '../styles/StyledText'
import { MdPerson } from 'react-icons/md'
import { MdEmail, MdPassword } from 'react-icons/md'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import StyledLabel from '../styles/StyledLabel'
import Button from '../components/Button'

const Login = () => {
    const usernameRef = useRef()
  return (
    <FlexContainer background='primary' >
        <Box background='white' height='fit-content' padding='20px' borderRadius='10px' width='480px'>
            <form className='form'>
                <Text variant='h3' as='h3'>Login</Text>
                <div className='divider'></div>
                <StyledLabel width='100%' htmlFor='username' className='mt-10'>
                    <Text variant='caption' as='label'>Username or Email</Text>
                    <TextField icon={MdPerson} variant='outlined' reference={usernameRef}></TextField>
                </StyledLabel>
                <StyledLabel width='100%' htmlFor='password' className='mt-10'>
                    <Text variant='caption' as='label'>Password</Text>
                    <TextField type='password' endIcon={AiOutlineEye} icon={MdPassword} variant='outlined' reference={usernameRef} onEndIconClick={() => {}}></TextField>
                </StyledLabel>
                <FlexContainer padding='0' margin='10px 0 0 0' justifyContent='space-between'>
                    <Button variant={'elevated'}>Login</Button>
                    <span className='span'>(If you don't have an account, one will be created)</span>
                </FlexContainer>
            </form>
        </Box>
    </FlexContainer>
  )
}

export default Login