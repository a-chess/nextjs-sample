import Text from '@/components/Text';
import { container } from './page.css';

interface Props {
    params: {
        articleId: string
    }
}


export default function ArticleShow(params: Props) {
    return <main className={container}>
        <div>{JSON.stringify(params)}</div>
        <Text size='Title'>id: {params.params.articleId}</Text>
        <Text size='Title'>タイトル</Text>
    </main>
}