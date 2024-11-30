import styles from './TypesTags.module.css'

const TypesTags = ({ types }) => {
  return (
    <section className={styles.tags}>
      {types.map(({ id, type }) => (
        <span
          key={id}
          className={styles.tag}
        >
          {type}
        </span>
      ))}
    </section>
  )
}

export default TypesTags
