import { type IToDO } from './IToDo'

export interface IUseStorageStateReturn {
  newTask: (data: IToDO) => void
}
