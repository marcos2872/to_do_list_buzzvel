import { type IToDO } from './IToDo'

export interface IUseStorageStateReturn {
  tasks: IToDO[]
  newTask: (data: IToDO) => void
  viewTask: string
  setViewTask: (id: string) => void
  updateTaskHook: (id: string, data: IToDO) => void
}
