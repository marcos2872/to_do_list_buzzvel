'use client'

import { type IToDO } from '@/interfaces/IToDo'
import React, { createContext, useContext, useState } from 'react'

export interface ContextProps {
  tasks: IToDO[]
  setTask: (data: IToDO) => void
}

export const Context = createContext<ContextProps>({
  tasks: [] as IToDO[],
  setTask: (): void => {}
})

export function ContextProvider ({ children }: any): React.JSX.Element {
  const [tasks, setTasks] = useState<IToDO[]>([])

  const setTask = (data: IToDO): void => {
    setTasks((prev) => [data, ...prev])
  }

  return (
    <Context.Provider value={{ tasks, setTask }}>
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = (): ContextProps => useContext(Context)
