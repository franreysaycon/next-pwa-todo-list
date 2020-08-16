import React, { useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Input from './Input'
import { PlusCircle } from 'react-feather'
import ClearButton from './ClearButton'

const Container = styled.div`
  display: flex;
  height: 50px;

  & > input {
    margin-right: ${({ theme }) => theme.spaces[0]};
  }
`

const TaskInput = ({ onSubmit }) => {
    const [text, setText] = useState('')
    const theme = useTheme()

    const handleTextChange = (e) => {
        const { value } = e.target
        setText(value)
    }

    const handleSubmit=  () => {
        setText('')
        onSubmit(text)
    }

    return (
        <Container>
            <Input value={text} onChange={handleTextChange} placeholder="Enter task here" />
            <ClearButton onClick={handleSubmit}><PlusCircle color={theme.buttonColor.main} size={30} /></ClearButton>
        </Container>
    )
}

export default TaskInput
