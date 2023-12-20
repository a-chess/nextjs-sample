import React from 'react'
import styles from './page.module.css'
import NoteIcon from '@/assets/note.svg'
import { Metadata } from 'next'
import Dummy from '@/components/Dummy'
import { useTranslation } from '../i18n'
import Head from 'next/head'

interface PageProps {
  params: {
    lng: string
  }
}

async function Home({params: {lng}}: PageProps) {
  const {t} = await useTranslation(lng)

  return (
    <main className={styles.container}>
      {t('title')}
      <div className={styles.hoge}></div>
      <NoteIcon height={100} width={100}/>

      <Dummy lng={lng}/>
    </main>
  )
}

export default Home