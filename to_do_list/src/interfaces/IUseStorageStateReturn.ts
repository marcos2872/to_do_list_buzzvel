import { type IToDO } from './IToDo'

export interface IUseStorageStateReturn {
  tasks: IToDO[]
  newTask: (data: IToDO) => void
  viewTask: string
  setViewTask: (id: string) => void
  updateTaskHook: (id: string, data: IToDO) => void
  updateListTask: (id: string, listId: string) => void
  deleteListTask: (id: string, listId: string) => void
  deleteTask: (id: string) => void
}
