import styles from './NotExist.module.css'

const NotExist = ({ id }) => {
  return (
    <div className={styles.container}>
      <h2>Digimon with id: {id} not found</h2>
      <img
        src='/Digimon_Not_Found.webp'
        alt='Digimon Not Found'
      />
    </div>
  )
}

export default NotExist
