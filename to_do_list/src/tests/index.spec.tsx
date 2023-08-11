import React from 'react'
import Home from '../app/page'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'

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
    const { getByTestId } = render(<Home />)

    const inputNewToDo = getByTestId('input-new-to-do')
    const buttonNewToDo = getByTestId('button-new-to-do')
    const inputError = getByTestId('input-new-to-do')

    expect(inputNewToDo).toBeVisible()
    expect(buttonNewToDo).toBeVisible()

    fireEvent.change(inputNewToDo, { target: { value: 'te' } })

    expect(inputNewToDo).toHaveDisplayValue('te')
    expect(buttonNewToDo).toBeDisabled()
    expect(inputError).toBeVisible()

    fireEvent.change(inputNewToDo, { target: { value: 'teste1' } })

    expect(inputNewToDo).toHaveDisplayValue('teste1')
    expect(buttonNewToDo).toBeEnabled()

    fireEvent.keyDown(inputNewToDo, { key: 'Enter', code: 'Enter', charCode: 13 })

    expect(inputNewToDo).toHaveDisplayValue('')
  })
})
