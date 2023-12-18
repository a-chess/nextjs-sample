interface Props {
    params: {
        articleId: string
    }
}

export default function ArticleShow(params: Props) {

    return <main>
        <div>{JSON.stringify(params)}</div>
        <div>id: {params.params.articleId}</div>
    </main>
}