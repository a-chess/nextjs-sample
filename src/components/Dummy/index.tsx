'use client'
import { useTranslation } from '@/app/i18n/client'
import React from 'react'
import { useInjection } from './hooks'

interface Props {
    lng: string
}

function Dummy({lng}: Props) {
    const {t} = useTranslation(lng)
    const {value} = useInjection()

    return <div>
            <div>value: {value}</div>
            <div>translate: {t('title')}</div>
        </div>
}

export default React.memo(Dummy)