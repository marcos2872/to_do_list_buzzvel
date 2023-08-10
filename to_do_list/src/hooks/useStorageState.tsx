'use client'

// import { useEffect } from 'react'
import { useGlobalContext } from '@/context/context'
import { type IToDO } from '@/interfaces/IToDo'
import { type IUseStorageStateReturn } from '@/interfaces/IUseStorageStateReturn'

function useStorageState (): IUseStorageStateReturn {
  const { tasks, setTask, viewTask, setViewTask } = useGlobalContext()

  // useEffect(() => {
  //   const storageLocal = localStorage.getItem('tasks')
  //   if (storageLocal !== null && tasks.length === 0) {
  //     const userData = JSON.parse(storageLocal)
  //     setTask(userData)
  //   }
  // }, [])

  const newTask = (data: IToDO): void => {
    setTask(data)
    // setTimeout(() => {
    //   localStorage.setItem(
    //     'tasks',
    //     JSON.stringify(tasks)
    //   )
    // }, 1000 * 5)
  }

  return { newTask, tasks, viewTask, setViewTask }
}

export default useStorageState
