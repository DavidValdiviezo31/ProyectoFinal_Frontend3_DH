import Card from '@/components/card/Card'
import NextEvolutions from '@/components/nextEvolutions/NextEvolutions'
import PriorEvolutions from '@/components/priorEvolutions/PriorEvolutions'
import TypesTags from '@/components/typeTag/TypesTags'
import styles from './DigimonDetail.module.css'

const DigimonDetail = ({ id, name, images, descriptions, types, nextEvolutions, priorEvolutions }) => {
  const description = descriptions.find(desc => desc.language === 'en_us')?.description || 'No description available.'

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.description}>
          <h3>Digimon Description:</h3>
          <p>{description}</p>
          <TypesTags types={types} />
        </div>
        <Card
          id={id}
          name={name}
          image={images[0]?.href}
        />
      </header>
      <section className={styles.section}>
        <NextEvolutions
          name={name}
          nextEvolutions={nextEvolutions}
        />
        <PriorEvolutions
          name={name}
          priorEvolutions={priorEvolutions}
        />
      </section>
    </article>
  )
}

export default DigimonDetail
