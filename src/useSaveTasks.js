import { useEffect } from 'react'

const useSaveTasks = (tasks) => {
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
}

export default useSaveTasks
