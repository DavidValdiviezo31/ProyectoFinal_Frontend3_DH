import Card from '@/components/card/Card'
import styles from './PriorEvolutions.module.css'

const PriorEvolutions = ({ name, priorEvolutions }) => {
  return (
    <section className={styles.container}>
      <h3>Prior Evolutions of {name}:</h3>
      {priorEvolutions.length === 0 && <p>{name} has no prior evolutions.</p>}
      <div className={styles.grid}>
        {priorEvolutions.map(({ id, digimon: name, image }) => (
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

export default PriorEvolutions
