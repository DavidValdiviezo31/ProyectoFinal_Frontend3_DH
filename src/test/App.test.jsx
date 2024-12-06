import App from '@/App'
import FavsProvider from '@/contexts/FavsContext'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('App renders correctly', () => {
    render(
      <FavsProvider>
        <App />
      </FavsProvider>
    )

    const root = document.getElementById('root')
    expect(root).toBeDefined()
  })
})
