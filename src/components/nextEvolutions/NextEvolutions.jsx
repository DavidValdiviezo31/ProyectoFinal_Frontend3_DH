import Card from '@/components/card/Card'
import styles from './NextEvolutions.module.css'

const NextEvolutions = ({ name, nextEvolutions }) => {
  return (
    <section className={styles.container}>
      <h3>Next Evolutions of {name}:</h3>
      {nextEvolutions.length === 0 && <p>{name} has no next evolutions.</p>}
      <div className={styles.grid}>
        {nextEvolutions.map(({ id, digimon: name, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            image={image}
          />
        ))}
      </div>
    </section>
  )
}

export default NextEvolutions
