import React, { useState } from 'react'
import Box from '../components/Box'
import MarginBox from '../components/MarginBox'
import TaskInput from '../components/TaskInput'
import useSaveTasks from '../useSaveTasks'
import useGetSavedTasks from '../useGetSavedTasks'
import TaskList from '../components/TaskList'

const Homepage = () => {

  const savedTasks = useGetSavedTasks()
  const [tasks, setTasks] = useState(savedTasks)
  useSaveTasks(tasks)

  const handleSubmit = (task) => {
    setTasks([...tasks, task])
  }

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <Box>
      <MarginBox>
        <h1>Your Todo List :</h1> 
        <TaskInput onSubmit={handleSubmit}/>
        <TaskList tasks={tasks} onDelete={handleDelete} />
      </MarginBox>
    </Box>
  )
}

export default Homepage
