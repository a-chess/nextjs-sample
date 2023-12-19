'use client'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
  fonts: {
    heading: `'Hiragino Kaku Gothic ProN', sans-serif`,
    body: `'Hiragino Kaku Gothic ProN', sans-serif`,
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'grey',
      },
    },
  },
})


export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}