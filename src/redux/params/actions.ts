import { createAction } from '@reduxjs/toolkit'
import { ParamsState } from './state'

export const setIsOpenSentMail = createAction<ParamsState['isOpenSentMail'], 'params/setIsOpenSentMail'>(
  'params/setIsOpenSentMail',
)
