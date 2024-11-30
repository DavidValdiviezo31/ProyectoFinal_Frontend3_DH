import { createContext, useContext } from 'react'

export const FavsContext = createContext()

export const useFavs = () => {
  const context = useContext(FavsContext)
  if (!context) throw new Error('useFavs must be used within a FavsProvider')

  return context
}
