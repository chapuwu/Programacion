import React from 'react'
import { useState } from 'react'
import Desplegable from './Desplegable'

export default function Boton() {
    const [mostrarLista, setMostrarLista] = useState(false)

    return (
        <div>
            <button
                className='bg-blue-600 h-20 w-32'
                onClick={() => {
                    setMostrarLista(!mostrarLista)
                }}>
                Boton
            </button>
            <Desplegable numero={mostrarLista ? 30 : 0}></Desplegable>
        </div>
    )
}
