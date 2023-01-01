import React, { useEffect, useState } from 'react'
import { MdCancel } from 'react-icons/md';
import Box from '../styles/StyledBox';
import { FloatingActionButton } from '../styles/StyledButton';
import FlexContainer from '../styles/StyledFlexContainer';
import Text from '../styles/StyledText';

const ErrorDisplay = ({ error, show, setShow, timeout = 3000 }) => {

    useEffect(() => {
        if (error) {
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, timeout)
        }
    }, [error])


    return (
        <Box position='fixed' width='100%' background='rgb(241, 64, 64)' height='fit-content' padding='10px 0px'
            className={show ? 'error_box show' : 'error_box hide'}>
            <Text color='white' variant='p' as='p'>{error || 'No error to show'}</Text>
            <FloatingActionButton
                onClick={() => setShow(false)} size={35} className='floating_button' variant='rgb(241, 64, 64)'>
                <MdCancel />
            </FloatingActionButton>
        </Box>
    )
}

export const ErrorToast = ({ error, show, setShow, timeout = 4000 }) => {

    useEffect(() => {
        if (error) {
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, timeout)
        }
    }, [error])


    return (
        <Box position='fixed' width='fit-content' background={'rgb(241, 64, 64)'} borderRadius={'20px'} height='fit-content' padding='10px 15px'
            className={show ? 'error_toast show' : 'error_toast hide'}>
            <Text color='white' variant='caption' as='p'>{error || 'No error to show'}</Text>
        </Box>
    )
}

export default ErrorDisplay