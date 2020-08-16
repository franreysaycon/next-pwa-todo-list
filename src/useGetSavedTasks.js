const useGetSavedTasks = () => {
    if(typeof window === 'undefined'){
        return null
    }
    return JSON.parse(localStorage.getItem('tasks')) || []
}

export default useGetSavedTasks
