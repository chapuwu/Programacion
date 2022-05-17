import React from 'react'

export default function Button({ onNewText }) {
    return (
        <div className='mt-10 flex justify-evenly w-full'>
            <button className='bg-green-600 p-3 rounded-lg hover:scale-110'>Enviar Nota</button>
            <button className='bg-blue-800 p-3 rounded-lg hover:scale-110'>Reiniciar</button>
        </div>
    )
}
