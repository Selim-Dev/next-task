import Navbar from './components/Navbar'
import FormHeader from './components/common/FormHeader'
import Forms from './components/forms'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Forms />
    </main>
  )
}
