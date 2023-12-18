import styles from './page.module.css'
import NoteIcon from '../assets/note.svg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home screen',
}

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.hoge}></div>
      <NoteIcon height={100} width={100}/>
    </main>
  )
}
