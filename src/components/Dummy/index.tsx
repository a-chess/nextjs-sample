'use client'
import React from 'react'
import {useInjection} from './hooks'

function Dummy() {
    const {value} = useInjection()

    return <div>value: {value}</div>
}

export default React.memo(Dummy)