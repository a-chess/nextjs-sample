'use client'
import { useRef } from 'react'
import { store } from '@/redux'
import { Provider } from 'react-redux'

interface StoreProviderProps {
    children: React.ReactNode
}

export default function StoreProvider({ children }:StoreProviderProps) {
    return <Provider store={store}>{children}</Provider>
}