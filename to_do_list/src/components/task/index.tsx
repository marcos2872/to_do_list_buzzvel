import useStorageState from '@/hooks/useStorageState'
import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'

export default function Task ({ id }: { id: string }): React.JSX.Element {
  const { tasks, setViewTask } = useStorageState()

  const info = tasks.find((vale) => vale.id === id)

  return (
    <div
      className='absolute flex flex-col items-center w-[90%] h-40 border-2 border-Dark_3 bg-Dark_2 rounded-xl mt-16 sm:w-[500px]'
    >
      <section className='flex items-center justify-center'>
        <h4 className='text-Dark_5 font-semibold text-xl'>{info?.name}</h4>
        <VscChromeClose
        className='text-red-600 text-2xl absolute right-1 '
        onClick={() => {
          setViewTask('')
        }} />
      </section>
    </div>
  )
}
