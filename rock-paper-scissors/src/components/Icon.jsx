import React from 'react'
import Roca from './Roca'
import Tijera from './Tijera'
import Papel from './Papel'

export default function Icon({ drawOption }) {
    if (drawOption === 'piedra') {
        return <Roca />
    }

    if (drawOption === 'papel') {
        return <Papel />
    }

    if (drawOption === 'tijera') {
        return <Tijera />
    }

    return null
}
