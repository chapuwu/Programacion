import React from 'react'
import Roca from './Roca'
import Tijera from './Tijera'
import Papel from './Papel'

export default function Icon({ option }) {
    if (option === 'piedra') {
        return <Roca />
    }

    if (option === 'papel') {
        return <Papel />
    }

    if (option === 'tijera') {
        return <Tijera />
    }

    return null
}
