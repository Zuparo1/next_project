
import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}> Animal Page</h1>
        <Link href="/zoo">
            <p className={styles.link} >Navigate to the zoo</p>
        </Link>
      </div>
    </main>
  )
}
