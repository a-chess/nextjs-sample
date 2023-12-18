import { FontSizeKeys, fontSize } from "@/app/const/fontSIze.css"

interface Props {
    size?: FontSizeKeys
    children: React.ReactNode
}
export default function Text({size = 'Caption2',children}: Props) {
    return <p className={fontSize[size]}>{children}</p>
}