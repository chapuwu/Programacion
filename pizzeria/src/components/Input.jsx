import React, { useState } from 'react'

export default function Input({ onNewText }) {
    const [texto, setTexto] = useState('')
    const [tituloText, setTituloText] = useState('')
    return (
        <div className='mt-20 bg-gray-500 h-auto w-2/5 flex flex-col'>
            <input
                type='text'
                className='bg-gray-500 font-bold text-lg w-full outline-0 border-b-2 border-gray-900 placeholder:text-slate-900'
                placeholder='Title Note'
                value={tituloText}
                onChange={(e) => setTituloText(e.target.value)}
                spellCheck={false}
            />
            <textarea
                className='bg-neutral-300 container mt-10 outline-none font-bold px-2 rounded'
                cols='30'
                rows='10'
                placeholder='tomorrow I have to cook a steak...'
                value={texto}
                onChange={(event) => {
                    setTexto(event.target.value)
                }}
                spellCheck={false}></textarea>
            <div className='mt-10 flex justify-evenly w-full'>
                <button
                    className='bg-green-600 p-3 rounded-lg hover:scale-110'
                    onClick={() => {
                        onNewText(tituloText, texto)
                        setTituloText('')
                        setTexto('')
                    }}>
                    Enviar Nota
                </button>
                <button className='bg-blue-800 p-3 rounded-lg hover:scale-110'>Reiniciar</button>
            </div>
        </div>
    )
}
