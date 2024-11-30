import Card from '@/components/card/Card'
import { useFavs } from '@/hooks/useFavs'
import Layout from '@/layout/Layout'
import styles from './Favs.module.css'

const Favs = () => {
  const { favorites } = useFavs()

  return (
    <Layout>
      <section className={styles.container}>
        <h1>Favorites Digimon List</h1>
        <div className={styles.grid}>
          {favorites.map(digimon => {
            return (
              <Card
                key={digimon.id}
                {...digimon}
              />
            )
          })}
          {favorites.length === 0 && <p>No digimons favorites yet.</p>}
        </div>
      </section>
    </Layout>
  )
}

export default Favs
