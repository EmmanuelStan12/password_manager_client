import React from 'react'
import FlexContainer from '../styles/StyledFlexContainer'
import Text from '../styles/StyledText'

const Slider = ({ label, length, setLength }) => {
  return (
    <FlexContainer margin='10px 0 0 0' gap='12px'>
        <Text as='label' variant='caption' style={{ fontStyle: 'bold' }} color='primaryText'>{label}</Text>
        <input style={{ flex: 1 }} type="range" min="8" max="20"
        onChange={(e) => setLength(e.target.value)}
        value={length}
        class="slider"></input>
    </FlexContainer>
  )
}

export default Slider