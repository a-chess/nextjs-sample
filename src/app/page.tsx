import React from 'react'
import styles from './page.module.css'
import NoteIcon from '../assets/note.svg'
import { Metadata } from 'next'
import Dummy from '@/components/Dummy'

export const metadata: Metadata = {
  title: 'Home screen',
}

function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.hoge}></div>
      <NoteIcon height={100} width={100}/>

      <Dummy/>
    </main>
  )
}

export default Home