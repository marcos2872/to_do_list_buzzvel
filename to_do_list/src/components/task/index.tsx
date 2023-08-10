import React from 'react'

export default function Task({ id }: { id: string }) {
  return (
    <div className=' absolute w-[95%] h-40 bg-slate-600'>{id}</div>
  )
}

