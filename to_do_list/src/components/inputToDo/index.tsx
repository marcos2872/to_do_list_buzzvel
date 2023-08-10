'use client'

import React, { useState } from 'react'
import { z } from 'zod'
import ErrorInput from '../errorInput'
import useStorageState from '@/hooks/useStorageState'
import { v4 as uuidv4 } from 'uuid'

export default function InputToDo (): React.JSX.Element {
  const [nameState, setNameState] = useState('')
  const { newTask, tasks } = useStorageState()

  const name = z.string().min(3).max(30)

  const nameValidate = (): boolean => tasks.some(({ name }) => name === nameState)

  const heardleInput = (): void => {
    newTask({
      id: uuidv4(),
      name: nameState,
      status: 'New'
    })
    setNameState('')
  }

  return (
    <div className='flex pt-5 gap-2'>
      <div>
      <input
      className='outline-none bg-Dark_4 text-Dark_1 px-2 rounded-lg w-64 h-9 lg:w-96 placeholder:text-Dark_3'
      value={nameState}
      placeholder='enter task name'
      onChange={({ target }) => { setNameState(target.value) }}
      onKeyDown={({ key }) => {
        if (key === 'Enter') {
          heardleInput()
        }
      }}
      />
      {!name.safeParse(nameState).success && nameState !== '' && <ErrorInput message='* The name must be between 3 and 30 characters long.'/>}
      {nameValidate() && <ErrorInput message='* a task with the same name already exists.'/>}
      </div>
      <button className='bg-Dark_5 rounded-lg h-9 w-12'
      disabled={ !name.safeParse(nameState).success || nameValidate() }
      onClick={heardleInput}
      >Save</button>
    </div>
  )
}
