import DigimonDetail from '@/components/digimonDetail/DigimonDetail'
import NotExist from '@/components/notExist/NotExist'
import { useGetDigimonById } from '@/hooks/useGetDigimonById'
import Layout from '@/layouts/Layout'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import styles from './Digimon.module.css'

const Digimon = () => {
  const { id } = useParams()
  const [digimonExist, setDigimonExist] = useState(true)
  const { digimonDetail } = useGetDigimonById(id)

  useEffect(() => {
    if (digimonDetail === undefined) setDigimonExist(false)
  }, [digimonDetail])

  return (
    <Layout>
      <section className={styles.container}>
        {digimonDetail && <DigimonDetail {...digimonDetail} />}
        {!digimonDetail && digimonExist && <PuffLoader color='#f1356d' />}
        {!digimonExist && <NotExist id={id} />}
      </section>
    </Layout>
  )
}

export default Digimon
