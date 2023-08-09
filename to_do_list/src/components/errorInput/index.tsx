import React from 'react'

export default function ErrorInput ({ message }: { message: string }): React.JSX.Element {
  return (
    <p className='text-sm font-semibold text-red-500 pl-2'>{message}</p>
  )
}
