import React, { useRef } from 'react'
import { AiOutlineEye, AiOutlineKey } from 'react-icons/ai'
import { MdPassword, MdPerson } from 'react-icons/md'
import Button from '../components/Button'
import TextField from '../components/TextField'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import StyledLabel from '../styles/StyledLabel'
import Text from '../styles/StyledText'

const CreatePasssword = () => {
  const usernameRef = useRef()
  return (
    <Box padding='90px 0 0 0'>
        <Box margin='10px 0 0 0' height='100%' padding='10px' position='relative'>
            <Text as='h3' variant='h3'>Create Password</Text>
            <div className='shadow'></div>
            <Box height={'fit-content'} width='400px'>
              <form className='form'>
                  <StyledLabel width='100%' htmlFor='username' className='mt-10'>
                      <Text variant='caption' as='label'>Company name or Website</Text>
                      <TextField icon={MdPerson} variant='outlined' reference={usernameRef}></TextField>
                  </StyledLabel>
                  <StyledLabel width='100%' htmlFor='password' className='mt-10'>
                      <Text variant='caption' as='label'>Password</Text>
                      <TextField type='password' endIcon={AiOutlineEye} icon={MdPassword} variant='outlined' reference={usernameRef} onEndIconClick={() => {}}></TextField>
                  </StyledLabel>
                  <StyledLabel width='100%' htmlFor='password' className='mt-10'>
                      <Text variant='caption' as='label'>Encryption key</Text>
                      <TextField icon={AiOutlineKey} variant='outlined' reference={usernameRef} onEndIconClick={() => {}}></TextField>
                      <Text variant='caption' color='#d2d2d2' style={{fontStyle: 'italic'}} as='span'>You can leave this empty to use the default</Text>
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