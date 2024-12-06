import FavsProvider from '@/contexts/FavsContext'
import Contact from '@/pages/contact/Contact'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Contact Page Tests', () => {
  it('inputs are defined', () => {
    // Arrange
    render(<FavsProvider><Contact /></FavsProvider>)
    screen.debug()

    // Act
    const input = screen.getAllByRole('textbox')

    // Assert
    expect(input).toBeDefined()
    expect(input).toHaveLength(3)
  })
})
