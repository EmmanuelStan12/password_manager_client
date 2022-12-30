import React from 'react'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import Text from '../styles/StyledText'

const Settings = () => {
  return (
    <Box padding='90px 0 0 0'>
        <Box margin='10px 0 0 0' height='100%' padding='10px' position='relative'>
            <Text as='h3' variant='h3'>Settings</Text>
            <div className='shadow'></div>
            <FlexContainer flexDirection='column' alignItems='start' justifyContent='start' gap='10px' height=''>
              <SettingItem title={'Encryption key'} subtitle={'Change Encryption key'} onClick={() => {}} />
              <SettingItem title={'Password'} subtitle={'Change Password'} onClick={() => {}} />
            </FlexContainer>
        </Box>
    </Box>
  )
}

const SettingItem = ({ title, subtitle, onClick }) => {
  return (
    <FlexContainer width='300px' gap='10px' height='fit-content' padding='10px'
            justifyContent='start'

            style={{ borderBottom: '1px solid #e2e2e2', cursor: 'pointer' }}
        >
            <FlexContainer color='white' width='50px' height='50px' borderRadius='50%' 
                background={'primary'}
            >
                <Text as='h5' color='white' variant='h5'>
                    {title[0].toUpperCase()}
                </Text>
            </FlexContainer>
            <Box height='fit-content' width='fit-content' style={{ flex: 1 }}>
                <Text as='p' variant='p'>
                    {title}
                </Text>
                <Text as='p' color='#d2d2d2' variant='caption' style={{ fontStyle: 'italic' }}>
                    {subtitle}
                </Text>
            </Box>
        </FlexContainer>
  )
}

export default Settings