import FavsProvider from '@/contexts/FavsContext'
import Contact from '@/pages/contact/Contact'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

describe('Contact Page Tests', () => {
  it('The text fields are defined and have 3 elements', () => {
    render(
      <MemoryRouter>
        <FavsProvider>
          <Contact />
        </FavsProvider>
      </MemoryRouter>
    )

    const input = screen.getAllByRole('textbox')

    expect(input).toBeDefined()
    expect(input.length).toBe(3)
  })
})
