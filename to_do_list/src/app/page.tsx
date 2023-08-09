import InputToDo from '@/components/inputToDo'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'

export default function Home (): React.JSX.Element {
  return (
    <main className="flex flex-col items-center pt-14 w-screen h-screen bg-Dark_1">

      <div className="flex items-center justify-center w-[95%] absolute top-0 h-12 border-b-2 border-Dark_3">
        <h1 className="font-bold text-2xl text-Dark_5">To do List</h1>
        <FiLogOut
        className=" w-6 h-6 absolute right-5 text-red-600"
        />
      </div>

      <InputToDo />

    </main>
  )
}
