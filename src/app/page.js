import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Animal Page</h1>
        <Link href="/api/items">
            <a>Navigate to the zoo</a>
        </Link>
      </div>
    </main>
  )
}
