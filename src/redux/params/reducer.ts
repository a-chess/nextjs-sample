import * as actions from './actions'
import { initialState, ParamsState } from './state'
import { createReducer } from '@reduxjs/toolkit'

type CreatorMap = typeof actions

export default createReducer<ParamsState, CreatorMap>(initialState(), {
  [actions.setIsOpenSentMail.type]: (state, action): ParamsState => {
    return {
      ...state,
      isOpenSentMail: action.payload,
    }
  },
})
