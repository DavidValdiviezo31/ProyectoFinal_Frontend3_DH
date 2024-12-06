import Card from '@/components/card/Card'
import { useFetchDigimonList } from '@/hooks/useFetchDigimonList'
import Layout from '@/layouts/Layout'
import styles from './Home.module.css'

const Home = () => {
  const { digimonList } = useFetchDigimonList()

  return (
    <Layout>
      <section className={styles.container}>
        <h1>Digimon List</h1>
        <div className={styles.grid}>
          {digimonList.map(digimon => {
            return (
              <Card
                key={digimon.id}
                {...digimon}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Home
