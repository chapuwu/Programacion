import React from 'react'
import NotaElement from './NotaElement'

export default function Notas({ notas }) {
    return (
        <ul className='grid mt-20 px-3 w-full grid-cols-4 gap-2'>
            {notas.map((nota) => (
                <NotaElement text={nota.nota} key={nota.nota} titulo={nota.titulo} />
            ))}
        </ul>
    )
}
