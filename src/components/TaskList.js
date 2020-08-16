import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
  display: flex;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
`

const TaskList = ({ tasks, onDelete }) => (
  <Container>
    { tasks && tasks.map( (task, i) => (
        <Card key={`task_${i}`} text={task} onClick={() => onDelete(i)} />
    ))}
  </Container>
)

export default TaskList
