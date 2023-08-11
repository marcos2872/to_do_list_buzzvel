import React from 'react'

export default function ErrorInput ({ message }: { message: string }): React.JSX.Element {
  return (
    <p data-testid='input-error' className='text-sm font-semibold text-red-500 pl-2 w-64 h-9 lg:w-96 whitespace-wrap'>{message}</p>
  )
}
