/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type IToDO } from '@/interfaces/IToDo'
import React, { useState } from 'react'
import useStorageState from '@/hooks/useStorageState'

interface PropsType {
  title: string
  cards: IToDO[]
}

export default function ViewCards({ title, cards }: PropsType): React.JSX.Element {
 const {setViewTask} = useStorageState()
  return (
    <div className='flex flex-col w-[90%] lg:w-[30%] h-auto border-2 border-Dark_3 bg-Dark_2 rounded-xl items-center pb-5'>
      <h3 className='text-lg text-Dark_5'>{title}</h3>
      <div className='flex flex-col w-full items-center pt-4
      md:flex-row md:flex-wrap md:justify-around gap-5'>
        {cards.map(item => (
          <div
            key={item.id}
            className='bg-Dark_3 w-[95%] max-w-[350px] h-20 rounded-xl flex flex-col py-2 px-4 gap-3'
            onClick={() => {
              setViewTask(item.id)
            }}
          >
            <h4 className='text-Dark_5 font-semibold text-lg'>{item.name}</h4>
            <p className='text-Dark_1 text-sm font-medium mt-2'>
              Done: {
                item.items?.length
                  ? <span className='text-red-500'>0/0</span>
                  : <span className='text-red-500'>0/0</span>
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
