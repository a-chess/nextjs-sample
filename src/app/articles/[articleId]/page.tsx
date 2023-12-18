import styles from './page.module.css'

interface Props {
    params: {
        articleId: string
    }
}

export default function ArticleShow(params: Props) {
    return <main className={styles.container}>
        <div className={styles.foo}>{JSON.stringify(params)}</div>
        <div>id: {params.params.articleId}</div>
    </main>
}