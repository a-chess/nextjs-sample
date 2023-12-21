'use client'
import React, { useMemo } from 'react'

interface LocaleContextValue {
  locale: string
}

const DEFAULT_THEME_VALUE: LocaleContextValue = {
  locale: 'ja'
}

const LocaleContext = React.createContext<LocaleContextValue>(DEFAULT_THEME_VALUE)

export const useLocale = (): LocaleContextValue => {
  return React.useContext(LocaleContext)
}

const { Provider } = LocaleContext

interface LocaleProviderProps {
  locale: string
  children: React.ReactNode
}

export function LocaleProvider({ children, locale }: LocaleProviderProps) {
  const value = useMemo<LocaleContextValue>(() => {
    return {
      locale
    }
  }, [locale])
  return <Provider value={value}>{children}</Provider>
}
