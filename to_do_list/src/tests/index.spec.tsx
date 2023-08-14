import React from 'react'
import Home from '../app/page'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { ContextProvider } from '../context/context'

describe('Home', () => {
  test('testing Home page components', () => {
    const { getByTestId, getAllByTestId } = render(<Home />)

    const buttonNewMobile = getByTestId('buttonNewMobile')
    const buttonProgressMobile = getByTestId('buttonProgressMobile')
    const buttonConcludedMobile = getByTestId('buttonConcludedMobile')

    fireEvent.click(buttonNewMobile)

    expect(getAllByTestId('New').length).toBe(2)

    fireEvent.click(buttonProgressMobile)

    expect(getAllByTestId('In Progress').length).toBe(2)

    fireEvent.click(buttonConcludedMobile)

    expect(getAllByTestId('Concluded').length).toBe(2)
  })

  test('testing inputToDo components', () => {
    const { getByTestId, getAllByTestId } = render(
      <ContextProvider>
        <Home />
      </ContextProvider>
    )

    const inputNewToDo = getByTestId('input-new-to-do')
    const buttonNewToDo = getByTestId('button-new-to-do')

    expect(inputNewToDo).toBeVisible()
    expect(buttonNewToDo).toBeVisible()

    fireEvent.change(inputNewToDo, { target: { value: 'te' } })

    const inputError = getByTestId('input-error')

    expect(inputNewToDo).toHaveDisplayValue('te')
    expect(inputError.innerHTML).toBe('* The name must be between 3 and 24 characters long.')
    expect(buttonNewToDo).toBeDisabled()
    expect(inputError).toBeVisible()

    fireEvent.change(inputNewToDo, { target: { value: 'teste1' } })

    expect(inputNewToDo).toHaveDisplayValue('teste1')
    expect(buttonNewToDo).toBeEnabled()

    fireEvent.keyDown(inputNewToDo, { key: 'Enter', code: 'Enter', charCode: 13 })

    expect(inputNewToDo).toHaveDisplayValue('')
    expect(getAllByTestId('teste1')[0]).toBeVisible()
  })

  test('testing ViewCards components', () => {
    const { getByTestId, getAllByTestId } = render(
      <ContextProvider>
      <Home />
    </ContextProvider>
    )

    const inputNewToDo = getByTestId('input-new-to-do')
    const buttonNewToDo = getByTestId('button-new-to-do')

    fireEvent.change(inputNewToDo, { target: { value: 'teste123' } })
    fireEvent.click(buttonNewToDo)

    const cardButton = getAllByTestId('card-button')[0]
    const cardDelete = getAllByTestId('card-delete')[0]

    fireEvent.click(cardButton)

    expect(getAllByTestId('task-container')[0]).toBeVisible()

    fireEvent.click(cardDelete)

    fireEvent.click(getAllByTestId('task-container-close')[0])
  })
  test('testing Task components', async () => {
    const { getByTestId, getAllByTestId } = render(
      <ContextProvider>
      <Home />
    </ContextProvider>
    )

    const inputNewToDo = getByTestId('input-new-to-do')
    const buttonNewToDo = getByTestId('button-new-to-do')

    fireEvent.change(inputNewToDo, { target: { value: 'teste123' } })
    fireEvent.click(buttonNewToDo)

    const cardButton = getAllByTestId('card-button')[0]

    fireEvent.click(cardButton)

    const textBox = getAllByTestId('task-textbox')[0]
    const newTask = getAllByTestId('task-new')[0]

    fireEvent.change(textBox, { target: { value: 'teste1' } })

    fireEvent.click(newTask)

    const newTaskInput = getAllByTestId('task-new-input')[0]

    fireEvent.change(newTaskInput, { target: { value: 'teste1' } })
    fireEvent.keyDown(newTaskInput, { key: 'Enter', code: 'Enter', charCode: 13 })

    fireEvent.click(newTask)
    fireEvent.change(newTaskInput, { target: { value: 'teste2' } })
    fireEvent.keyDown(newTaskInput, { key: 'Enter', code: 'Enter', charCode: 13 })

    const taskCheck = getAllByTestId('task-new-check')[0]
    const taskDelete = getAllByTestId('task-new-delete')[0]

    expect(taskCheck).not.toBeChecked()

    fireEvent.click(taskCheck)

    expect(taskCheck).toBeChecked()

    fireEvent.click(taskDelete)
  })
})
