import React, { useState } from 'react'

export default function Input({ onNewTodo }) {
    const [inputText, setInputText] = useState('')
    return (
        <div className='flex justify-center items-center m-5'>
            <input
                type='text'
                className='bg-slate-200 outline-0 border-solid border border-gray-500 h-9 font-bold rounded pl-2'
                placeholder='Agregar Tarea'
                onChange={(event) => {
                    setInputText(event.target.value)
                }}
                value={inputText}
            />
            <button
                className='bg-purple-600 text-white text-bold text-3xl ml-1 px-2 rounded-md'
                onClick={() => {
                    onNewTodo(inputText)
                }}>
                +
            </button>
        </div>
    )
}
