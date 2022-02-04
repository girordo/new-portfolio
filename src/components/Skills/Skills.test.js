import { render, screen } from '@testing-library/react'
import Skills from './Skills'

describe('Skills', () => {
  it('testing if Skills is rendering correctly', () => {
    render(<Skills />)
    expect(screen.getByTestId('skills-component')).toBeInTheDocument()
  })
})
