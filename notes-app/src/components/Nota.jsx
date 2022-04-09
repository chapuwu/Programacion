import React from 'react'
import './Nota.css'

export default function Nota({ titulo, texto }) {
    return (
        <div className='note'>
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    )
}
