import IconHeart from '@/components/icons/IconHeart'
import { useFavs } from '@/hooks/useFavs'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const items = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Favs', path: '/favs' },
  { id: 3, name: 'Contact', path: '/contact' }
]

const Navbar = () => {
  const currentPath = window.location.pathname

  const { favorites } = useFavs()

  return (
    <nav className={styles.nav}>
      <ul>
        {items.map(({ id, name, path }) => (
          <li
            key={id}
            className={currentPath === path ? styles.selected : ''}
          >
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>

      <div className={styles.favs}>
        <IconHeart />
        {favorites.length}
      </div>
    </nav>
  )
}

export default Navbar
