import { FavsContext } from '@/hooks/useFavs'
import { getFavsData, saveFavsData } from '@/utils/saveData'
import { useState } from 'react'
import { toast } from 'sonner'

const FavsProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(getFavsData())

  function addFavorite ({ id, name, image }) {
    if (!favorites.find(fav => fav.id === id)) {
      setFavorites(prev => [...prev, { id, name, image }])
      saveFavsData([...favorites, { id, name, image }])
      toast.success(`${name} added to favorites.`)
    }
  }

  function removeFavorite (id, name) {
    setFavorites(prev => prev.filter(digimon => digimon.id !== id))
    saveFavsData(favorites.filter(digimon => digimon.id !== id))
    toast.warning(`${name} removed from favorites.`)
  }

  function toggleFavorite ({ id, name, image, isFavorite }) {
    isFavorite ? removeFavorite(id, name) : addFavorite({ id, name, image })
  }

  return <FavsContext.Provider value={{ favorites, toggleFavorite }}>{children}</FavsContext.Provider>
}

export default FavsProvider
