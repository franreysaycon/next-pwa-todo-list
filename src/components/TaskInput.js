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
    const inputRef = useRef()
    const theme = useTheme()

    const handleSubmit=  () => {
        onSubmit(inputRef.current.value)
        inputRef.current.value = ''
    }

    return (
        <Container>
            <Input ref={inputRef} placeholder="Enter task here" />
            <ClearButton onClick={handleSubmit}><PlusCircle color={theme.buttonColor.main} size={30} /></ClearButton>
        </Container>
    )
}

export default TaskInput
