import { AnyAction, configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { RootState } from './state'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
  })


export type { RootState } from './state'

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector