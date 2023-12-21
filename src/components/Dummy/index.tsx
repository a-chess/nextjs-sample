'use client'
import { useTranslation } from '@/i18n/client'
import React from 'react'
import { useInjection } from './hooks'
import { useLocale } from '@/providers/localeProvider'

function Dummy() {
    const {locale} = useLocale()
    const {t} = useTranslation(locale)

    const {value} = useInjection()

    return <div>
            <div>value: {value}</div>
            <div>translate: {t('title')}</div>
        </div>
}

export default React.memo(Dummy)