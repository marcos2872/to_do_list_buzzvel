'use client'

import useStorageState from '../../hooks/useStorageState'
import { type IToDO } from '../../interfaces/IToDo'
import React, { useEffect, useState } from 'react'
import { VscChromeClose, VscAdd, VscTrash } from 'react-icons/vsc'
import { v4 as uuidv4 } from 'uuid'

export default function Task ({ id }: { id: string }): React.JSX.Element {
  const { tasks, setViewTask, updateTaskHook, updateListTask, deleteListTask } = useStorageState()
  const [info, setInfo] = useState<IToDO>()
  const [addTask, setAddTask] = useState(false)
  const [taskName, settTaskName] = useState('')

  useEffect(() => {
    const fid = tasks.find((vale) => vale.id === id)
    if (fid != null) {
      setInfo(fid)
    }
  }, [tasks])

  const heardleInput = (): void => {
    updateTaskHook(id,
      {
        id: info?.id ?? '',
        name: info?.name ?? '',
        status: 'New',
        description: info?.description ?? '',
        items: [
          ...(info?.items ?? []),
          {
            id: uuidv4(),
            title: taskName,
            concluded: false
          }
        ]
      })
    setAddTask(false)
    settTaskName('')
  }

  return (
    <div
      data-testid='task-container'
      className='absolute flex flex-col w-[90%] min-h-80 border-2 border-Dark_3 bg-Dark_2 rounded-xl mt-16 sm:w-[500px] p-1 gap-8'
    >
      <section className='flex items-center w-full'>
        <h4 className='text-Dark_5 font-semibold text-xl w-[90%] overflow-hidden whitespace-nowrap'>{info?.name}</h4>
        <VscChromeClose
          data-testid='task-container-close'
          className='text-red-600 text-2xl absolute right-1'
          onClick={() => {
            setViewTask('')
          }} />
      </section>

      <label className='flex flex-col w-full border-2 border-Dark_3 rounded-lg'>
        <span className='text-Dark_5 -mt-6'>Description:</span>
        <textarea
          data-testid='task-textbox'
          className='bg-transparent text-yellow-50 w-full h-40 whitespace-wrap resize-y p-1 outline-none'
          value={info?.description}
          placeholder='enter the description'
          onChange={({ target }) => {
            updateTaskHook(id,
              {
                id: info?.id ?? '',
                name: info?.name ?? '',
                description: target.value,
                items: [...(info?.items ?? [])],
                status: 'New'
              })
          }}
        />
      </label>

      <div className='flex flex-col w-full'>
        <section className='flex items-center justify-between w-full border-b-2 border-Dark_3'>
          <p className='text-Dark_5'>Tasks:</p>
          <VscAdd
            data-testid='task-new'
            className='text-green-400 text-2xl'
            onClick={() => {
              setAddTask((prev) => !prev)
            }} />
        </section>

        {addTask && (
          <section className='flex w-full justify-around pt-1'>
            <input
              data-testid='task-new-input'
              className='outline-none bg-Dark_4 text-Dark_1 px-2 rounded-lg w-64 h-9 lg:w-96 placeholder:text-Dark_3'
              placeholder='enter task name'
              value={taskName}
              maxLength={26}
              onChange={({ target }) => { settTaskName(target.value) }}
              onKeyDown={({ key }) => {
                if (key === 'Enter') {
                  heardleInput()
                }
              }}
            />
            <button className='bg-Dark_5 rounded-lg h-9 w-12'
              disabled={taskName === ''}
              onClick={heardleInput}
            >Save</button>

          </section>
        )}

        <section className='flex flex-col w-full h-40 p-1 gap-2'>
          {((info?.items) != null && info?.items.length !== 0)
            ? info.items.map((item) => (
              <div
                data-testid='task-new-list'
                key={item.id}
                className='flex items-center justify-between gap-2 w-full'
              >
                <div className='flex gap-2 items-center '>
                  <input data-testid='task-new-check' type='checkbox' checked={item.concluded} onChange={() => { updateListTask(id, item.id) }} />
                  <p className='text-yellow-50 '>{item.title}</p>
                </div>
                <VscTrash data-testid='task-new-delete' className='text-red-500 ml-0' onClick={() => { deleteListTask(id, item.id) }} />
              </div>
            ))
            : <p className='text-white opacity-50'>Without any tasks click on more to add</p>}
        </section>

      </div>

    </div>
  )
}
