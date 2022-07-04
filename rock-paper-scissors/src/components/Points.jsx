import React from 'react'

export default function Points({ text }) {
    return (
        <div className='bg-green-700 h-16 mt-8 rounded-lg w-1/4 flex justify-center items-center'>
            <p className='text-slate-800 text-xl font-bold'>{text}</p>
        </div>
    )
}
