export const initialState: () => ParamsState = () => ({
  isOpenSentMail: false,
  value: 'test'
})

export interface ParamsState {
  isOpenSentMail: boolean
  value: string
}
