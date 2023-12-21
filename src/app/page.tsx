import React from 'react'
import styles from './page.module.css'
import NoteIcon from '@/assets/note.svg'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { serverSideTranslation } from '../i18n'
import { headers } from "next/headers";

// NOTE: 
// Dummyコンポーネント内部でi18nテキストを描画している。contextを用いてRootLayoutでサーバー側でaccept-languageを元に取得したlocale値を共有しているが
// クライアントコンポーネントがchunkとしてサーバー側でレンダリングして配信→クライアント側で描画とした時にcontextの値が参照できないためサーバーサイドがデフォルト値で描画され
// 配信されたクライアント側で描画時にcontextの値が参照できるため本来の言語で表示となり「Text content did not match」エラーが発生。
// 解決のためサーバー側とクライアント側での初期描画の差分をなくすためダイナミックインポートを使用する。
const Dummy = dynamic(() => import('@/components/Dummy'), {ssr: false})

export async function generateMetadata(): Promise<Metadata> {
  const lng = headers()?.get('accept-language')?.split(',')[0] || 'ja'
  const {t} = await serverSideTranslation(lng)

  return {
    title: t('title'),
  }
}

async function Home() {
  const lng = headers()?.get('accept-language')?.split(',')[0] || 'ja'
  const {t} = await serverSideTranslation(lng)

  return (
    <main className={styles.container}>
      {t('title')}
      <div className={styles.hoge}></div>
      <NoteIcon height={100} width={100}/>

      <Dummy />
    </main>
  )
}

export default Home