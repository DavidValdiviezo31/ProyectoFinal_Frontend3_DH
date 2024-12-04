import Navbar from '@/components/navbar/Navbar'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Andrés David Intriago Valdiviezo</p>
      </footer>
    </>
  )
}

export default Layout
