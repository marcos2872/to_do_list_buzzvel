'use client'

import InputToDo from '@/components/inputToDo'
import Task from '@/components/task'
import ViewCards from '@/components/viewCards'
import useStorageState from '@/hooks/useStorageState'
import React, { useState } from 'react'
import { FiLogOut } from 'react-icons/fi'

export default function Home (): React.JSX.Element {
  const [view, setView] = useState<number>(0)
  const { tasks, viewTask } = useStorageState()

  const viewType = [
    { title: 'New' },
    { title: 'In Progress' },
    { title: 'Concluded' }
  ]

  return (
    <main className="flex flex-col items-center pt-14 pb-5 w-full min-h-screen h-full bg-Dark_1">

      <div className="flex items-center justify-center w-[95%] absolute top-0 h-12 border-b-2 border-Dark_3">
        <h1 className="font-bold text-2xl text-Dark_5">To do List</h1>
        <FiLogOut
          className=" w-6 h-6 absolute right-5 text-red-600"
        />
      </div>

      <InputToDo />

      <section className='flex justify-around w-80 pt-5 lg:hidden'>
        <button className={`border-2 border-Dark_3 rounded-md w-20  ${view === 0 ? 'bg-Dark_5' : 'bg-Dark_4'}`}
          onClick={() => { setView(0) }}
        >New</button>
        <button className={`border-2 border-Dark_3 rounded-md w-28  ${view === 1 ? 'bg-Dark_5' : 'bg-Dark_4'}`}
          onClick={() => { setView(1) }}
        >In Progress</button>
        <button className={`border-2 border-Dark_3 rounded-md w-28  ${view === 2 ? 'bg-Dark_5' : 'bg-Dark_4'}`}
          onClick={() => { setView(2) }}
        >Concluded</button>
      </section>

      <div className='flex w-full h-full justify-around pt-5 lg:hidden'>
        <ViewCards title={viewType[view].title} cards={tasks.filter(({ status }) => status === viewType[view].title)} />
      </div>

      <div className='hidden lg:flex w-full h-full justify-around pt-5'>
        {viewType.map((item, index) => (
          <ViewCards key={index} title={item.title} cards={tasks.filter(({ status }) => status === item.title)} />
        ))}
      </div>

      {viewTask !== '' && <Task id={viewTask} />}

    </main>
  )
}
