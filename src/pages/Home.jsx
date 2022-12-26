import React, { useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowForwardIos, MdArrowRight, MdDelete, MdDeleteOutline, MdOutlineArrowForward, MdVisibility } from 'react-icons/md'
import TextField from '../components/TextField'
import Box from '../styles/StyledBox'
import { FloatingActionButton, IconButton } from '../styles/StyledButton'
import FlexContainer from '../styles/StyledFlexContainer'
import { Avatar } from '../styles/StyledImage'
import Text from '../styles/StyledText'

const Home = () => {
    const searchRef = useRef()
  return (
    <Box padding='90px 0 0 0'>
        <FlexContainer gap='7px' height='fit-content'>
            <TextField placeholder='Search' width='300px' br='20px' variant={'outlined'} reference={searchRef} icon={AiOutlineSearch} />
            <FloatingActionButton size={40}>
                <MdOutlineArrowForward />
            </FloatingActionButton>
        </FlexContainer>
        <FlexContainer margin='10px 0 0 0' gap='7px' height='fit-content'>
            {([1, 2, 3, 4].map((value) => <HomePasswordItem />))}
        </FlexContainer>
        <Box margin='10px 0 0 0' height='100%' padding='10px' position='relative'>
            <Text as='h3' variant='h3'>Passwords</Text>
            <div className='shadow'></div>
            <FlexContainer justifyContent='start' gap='10px' height=''>
            {([1, 2, 3, 4].map((value) => <PasswordItem />))}
            </FlexContainer>
        </Box>
    </Box>
  )
}

const HomePasswordItem = () => {
    return (
        <Box width='200px' height='fit-content' background='primary' padding='10px' borderRadius='20px'>
            <Text color='white' as='h3' variant='h3'>
                53
            </Text>
            <Text color='white' as='p' variant='caption'>
                Total passwords
            </Text>
        </Box>
    )
}

const PasswordItem = () => {
    return (
        <FlexContainer width='300px' gap='10px' height='fit-content' padding='10px' borderRadius='20px'
            className='box_shadow'
            justifyContent='start'
        >
            <FlexContainer color='white' width='50px' height='50px' borderRadius='50%' 
                background={'primary'}
            >
                <Text as='h5' color='white' variant='h5'>
                    A
                </Text>
            </FlexContainer>
            <Box height='fit-content' width='fit-content' style={{ flex: 1 }}>
                <Text as='p' variant='p'>
                    Amazon
                </Text>
                <Text as='p' variant='p'>
                    ***********
                </Text>
            </Box>
            <div className='options'>
                <div><MdDeleteOutline /></div>
                <div><MdVisibility /></div>
            </div>
        </FlexContainer>
    )
}

export default Home