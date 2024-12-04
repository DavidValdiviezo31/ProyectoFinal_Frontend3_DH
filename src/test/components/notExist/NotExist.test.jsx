import NotExist from '@/components/notExist/NotExist'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Digimon Not Exist Component Tests', () => {
  const id = 555
  render(<NotExist id={id} />)

  it('H2 tag is defined and displays the correct message', () => {
    const h2 = screen.getByRole('heading')

    expect(h2).toBeDefined()
    expect(h2.textContent).toBe(`Digimon with id: ${id} not found`)
  })

  it('Image has correct src', () => {
    const image = screen.getByRole('img')

    expect(image).toBeDefined()
    expect(image.getAttribute('src')).toBe('/Digimon_Not_Found.webp')
  })
})
