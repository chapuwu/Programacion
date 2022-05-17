import React, { useState } from 'react'
import Button from './Button'

export default function Input({ onNewText }) {
    const [texto, setTexto] = useState('')
    return (
        <div className='mt-5 bg-gray-500 h-auto w-2/5 flex flex-col'>
            <input
                type='text'
                className='bg-gray-500 font-bold text-lg w-full outline-0 border-b-2 border-gray-900 placeholder:text-slate-900'
                placeholder='Title Note'
            />
            <textarea
                name=''
                id=''
                className='container mt-10 outline-none font-bold'
                cols='30'
                rows='10'
                placeholder='
tomorrow I have to cook a steak...'
                value={texto}
                onChange={(event) => {
                    setTexto(event.target.value)
                }}></textarea>
            <Button />
        </div>
    )
}
