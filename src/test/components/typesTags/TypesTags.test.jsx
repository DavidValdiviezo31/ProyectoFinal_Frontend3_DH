import TypesTags from '@/components/typesTags/TypesTags'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('TypesTags Component Tests', () => {
  const types = [
    { id: 1, type: 'fire' },
    { id: 2, type: 'water' },
    { id: 3, type: 'earth' }
  ]

  it('Digimon types render correctly', () => {
    render(<TypesTags types={types} />)

    const fireType = screen.getByText('fire')
    const waterType = screen.getByText('water')
    const earthType = screen.getByText('earth')

    expect(fireType).toBeDefined()
    expect(waterType.textContent).toBe('water')

    expect(waterType).toBeDefined()
    expect(waterType.textContent).toBe('water')

    expect(earthType).toBeDefined()
    expect(earthType.textContent).toBe('earth')
  })
})
