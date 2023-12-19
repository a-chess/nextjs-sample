import { combineReducers } from '@reduxjs/toolkit'
import { reducer as params } from '@/redux/params'


const rootReducer = combineReducers({
  params,
})

export default rootReducer
