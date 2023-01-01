import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineKey } from 'react-icons/ai'
import { MdPassword, MdPerson } from 'react-icons/md'
import Button from '../components/Button'
import { ErrorToast } from '../components/ErrorDisplay'
import Slider from '../components/Slider'
import Switch from '../components/Switch'
import TextField from '../components/TextField'
import { generatePassword } from '../logic/PasswordGenerator'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import StyledLabel from '../styles/StyledLabel'
import Text from '../styles/StyledText'
import AutoGenerateField from '../components/AutoGenerateField'

const CreatePasssword = () => {
  const usernameRef = useRef()
  const encryptionKeyRef = useRef()
  const passwordRef = useRef()
  const [type, setType] = useState('password')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Box padding='90px 0 0 0'>
        <Box margin='10px 0 0 0' height='100%' padding='10px' position='relative'>
            <Text as='h3' variant='h3'>Create Password</Text>
            <div className='shadow'></div>
            <Box height={'fit-content'} width='400px'>
              <form className='form' onSubmit={handleSubmit}>
                  <StyledLabel width='100%' htmlFor='username' className='mt-10'>
                      <Text variant='caption' as='label'>Company name or Website</Text>
                      <TextField icon={MdPerson} variant='outlined' reference={usernameRef}></TextField>
                  </StyledLabel>
                  <StyledLabel width='100%' htmlFor='password' className='mt-10'>
                      <Text variant='caption' as='label'>Password</Text>
                      <TextField type={type} endIcon={type == 'password' ? AiOutlineEye : AiOutlineEyeInvisible} icon={MdPassword} variant='outlined' reference={passwordRef} onEndIconClick={() => {
                        if (type === 'password') setType('text')
                        else setType('password')
                      }}></TextField>
                      <AutoGenerateField setPassword={(p) => {passwordRef.current.value = p}} />
                  </StyledLabel>
                  <FlexContainer padding='0' margin='10px 0 0 0' justifyContent='space-between'>
                      <Button variant={'elevated'}>Create</Button>
                  </FlexContainer>
              </form>
            </Box>
        </Box>
    </Box>
  )
}

export default CreatePasssword