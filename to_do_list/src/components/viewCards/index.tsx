/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type IToDO } from '../../interfaces/IToDo'
import React from 'react'
import useStorageState from '../../hooks/useStorageState'
import { VscTrash } from 'react-icons/vsc'

interface PropsType {
  title: string
  cards: IToDO[]
}

export default function ViewCards ({ title, cards }: PropsType): React.JSX.Element {
  const { setViewTask, deleteTask } = useStorageState()
  return (
    <div data-testid={title} className='flex flex-col w-[90%] lg:w-[30%] h-auto border-2 border-Dark_3 bg-Dark_2 rounded-xl items-center pb-5'>
      <h3 className='text-lg text-Dark_5'>{title}</h3>
      <div className='flex flex-col w-full items-center pt-4
      md:flex-row md:flex-wrap md:justify-around gap-5'>
        {cards.map(item => (
          <div
            data-testid={item.name}
            key={item.id}
            className='bg-Dark_3 w-[95%] max-w-[350px] h-20 rounded-xl flex items-end py-2 px-4 gap-3'
          >
            <section
            data-testid='card-button'
            className='flex flex-col w-full h-full'
              onClick={() => {
                setViewTask(item.id)
              }}>
              <h4 className='text-Dark_5 font-semibold text-lg w-full overflow-hidden whitespace-nowrap'>{item.name}</h4>
              <p className='text-Dark_1 text-sm font-medium mt-2'>
                Done:
                <span className='text-green-600'>
                  {`
                  ${item.items.filter((item) => item.concluded).length}/${item.items.length}
                `}
                </span>

              </p>
            </section>
            <VscTrash data-testid='card-delete' className='text-red-600 text-2xl' onClick={() => { deleteTask(item.id) }} />
          </div>
        ))}
      </div>
    </div>
  )
}
