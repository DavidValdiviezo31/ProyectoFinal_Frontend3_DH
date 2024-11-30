import IconHeart from '@/components/icons/IconHeart'
import IconTrash from '@/components/icons/IconTrash'
import { useFavs } from '@/hooks/useFavs'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'

const Card = ({ id, name, image }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { favorites, toggleFavorite } = useFavs()
  const navigate = useNavigate()

  function handleClick (e) {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'svg' || e.target.tagName === 'path') return
    navigate(`/digimon/${id}`)
  }

  useEffect(() => {
    setIsFavorite(favorites.some(fav => fav.id === id))
  }, [favorites, id])

  return (
    <article
      className={styles.card}
      onClick={handleClick}
    >
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className={styles.image}
      />
      <button onClick={() => toggleFavorite({ id, name, image, isFavorite })}>
        {isFavorite ? <IconTrash /> : <IconHeart />}
        {isFavorite ? 'Remove from favs' : 'Add to favs'}
      </button>
    </article>
  )
}

export default Card
