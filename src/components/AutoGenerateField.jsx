import React, { useRef, useState } from 'react'
import { generatePassword } from '../logic/PasswordGenerator'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import Button from './Button'
import { ErrorToast } from './ErrorDisplay'
import Slider from './Slider'
import Switch from './Switch'

export const AutoGenerateField = ({ setPassword, field }) => {
    const specialRef = useRef()
    const capitalRef = useRef()
    const numberRef = useRef()
    const [length, setLength] = useState(8)
    const [error, setError] = useState(null)
    const [show, setShow] = useState(false)

    const generateField = () => {
        const isAnyChecked = specialRef.current.checked || numberRef.current.checked || capitalRef.current.checked;
        if (!isAnyChecked) {
            setShow(true)
            setError('At least one field must be checked')
        } else {
            const password = generatePassword(
                capitalRef.current.checked,
                specialRef.current.checked,
                numberRef.current.checked,
                length
            );
            setPassword(password)
        }
    }

    return (
        <Box height='fit-content' width='100%'>
            <ErrorToast error={error} setShow={setShow} show={show} />
            <Button type='button' onClick={generateField} compact variant={'elevated'}>AutoGenerate</Button>
            <Slider label={`${field || 'Password'} length: ${length}`} setLength={setLength} length={length} />
            <FlexContainer margin='10px 0 0 0' justifyContent='start' gap='7px' width='fit-content' height='fit-content'>
                <Switch label={'123...'} variant='primary' reference={numberRef} />
                <Switch label={'#$%?/...'} variant='primary' reference={specialRef} />
                <Switch label={'ABC...'} variant='primary' reference={capitalRef} />
            </FlexContainer>
        </Box>
    )
}

export default AutoGenerateField