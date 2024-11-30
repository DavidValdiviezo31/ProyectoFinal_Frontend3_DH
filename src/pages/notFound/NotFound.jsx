import Layout from '@/layouts/Layout'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <img
        src='/Page_Not_Found.gif'
        alt='Page Not Found'
        className={styles.image}
      />
    </Layout>
  )
}

export default NotFound
