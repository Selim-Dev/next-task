import Forms from './components/forms'
import styles from './page.module.css'
import  { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className={styles.main}>
      <Toaster />
      <Forms />
    </main>
  )
}
