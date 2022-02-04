import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('testing if Hero component renders correctly', () => {
    render(<Hero />)
    expect(screen.getByTestId('hero-component')).toBeInTheDocument()
  })
})
