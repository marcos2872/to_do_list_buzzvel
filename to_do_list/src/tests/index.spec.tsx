import React from 'react'
import Home from '../app/page'
import { render } from '@testing-library/react'

describe('Home', () => {
  it('testing start page components', () => {
    const { getByText, getByRole } = render(<Home />)

    expect(getByText('To do List')).toBeTruthy()
    expect(getByText('New')).toBeTruthy()
    expect(getByText('In Progress')).toBeTruthy()
    expect(getByText('Concluded')).toBeTruthy()
    // expect(getByRole('input')).toBeTruthy()
  })
})
