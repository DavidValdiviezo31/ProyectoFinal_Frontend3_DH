import Contact from '@/pages/contact/Contact'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Contact Page Tests', () => {
  it('Button is defined', () => {
    // Arrange
    render(<Contact />)
    screen.debug()

    // Act
    const input = screen.getAllByRole('textbox')

    // Assert
    expect(input).toBeDefined()
    expect(input).toHaveLength(3)
  })
})
