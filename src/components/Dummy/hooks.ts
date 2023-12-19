import { useAppSelector } from "@/redux"

export function useInjection() {
    const {value} = useAppSelector((state) => {
        return {
            value: state.params.value
        }
    })

    

    return {
        value
    }
}