import React from 'react'

interface PropsType {
  title: string
}

export default function ViewCards ({ title }: PropsType): React.JSX.Element {
  return (
    <div className='flex w-[90%] lg:w-[30%] h-full border-2 border-Dark_3 rounded-xl justify-center bg-Dark_2'>
      <h3 className='text-lg text-Dark_5'>{title}</h3>
    </div>
  )
}
