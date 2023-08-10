'use client'

// import { useEffect } from 'react'
import { useGlobalContext } from '@/context/context'
import { type IToDO } from '@/interfaces/IToDo'
import { type IUseStorageStateReturn } from '@/interfaces/IUseStorageStateReturn'

function useStorageState (): IUseStorageStateReturn {
  const { tasks, setTask, viewTask, setViewTask, updateTask } = useGlobalContext()

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

  const updateTaskHook = (id: string, data: IToDO): void => {
    const update = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...data
        }
      }
      return item
    })
    updateTask(update)
  }

  return { newTask, tasks, viewTask, setViewTask, updateTaskHook }
}

export default useStorageState
