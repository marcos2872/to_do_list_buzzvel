/* eslint-disable array-callback-return */
'use client'

// import { useEffect } from 'react'
import { useGlobalContext } from '@/context/context'
import { type IToDO, type ItemsT } from '@/interfaces/IToDo'
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

  const updateStatus = (task: IToDO, data: ItemsT[]): any => {
    const allCompleted = data.every(({ concluded }) => concluded)
    const partCompleted = data.some(({ concluded }) => concluded)

    if (data.length === 0) {
      return {
        ...task,
        items: data,
        status: 'New'
      }
    }

    if (allCompleted) {
      return {
        ...task,
        items: data,
        status: 'Concluded'
      }
    }

    if (partCompleted) {
      return {
        ...task,
        items: data,
        status: 'In Progress'
      }
    }

    return {
      ...task,
      items: data,
      status: 'New'
    }
  }

  const updateTaskHook = (id: string, data: IToDO): void => {
    const update = tasks.map((item) => {
      if (item.id === id) {
        return updateStatus(item, data.items)
      }
      return item
    })
    updateTask(update)
  }

  const updateListTask = (id: string, listId: string): void => {
    const task = tasks.find((value) => value.id === id) as IToDO

    const updateList = task?.items.map((item) => {
      if (item.id === listId) {
        return {
          ...item,
          concluded: !item.concluded
        }
      }
      return item
    })

    updateTask(tasks.map((item: IToDO) => {
      if (item.id === id) {
        return updateStatus(task, updateList)
      }
      return item
    }))
  }

  const deleteListTask = (id: string, listId: string): void => {
    const task = tasks.find((value) => value.id === id) as IToDO
    const deleteTask = task.items.filter((item) => item.id !== listId)

    updateTask(tasks.map((item: IToDO) => {
      if (item.id === id) {
        return updateStatus(task, deleteTask)
      }
      return item
    }))
  }

  const deleteTask = (id: string): void => {
    const deleteTask = tasks.filter((item) => item.id !== id)

    updateTask(deleteTask)
  }

  return {
    tasks,
    viewTask,
    newTask,
    setViewTask,
    updateTaskHook,
    updateListTask,
    deleteListTask,
    deleteTask
  }
}

export default useStorageState
