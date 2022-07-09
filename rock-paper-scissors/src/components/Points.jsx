import React from 'react'

export default function Points({ text }) {
    return (
        <div className='bg-green-700 px-28 py-4 m-3 rounded-lg flex justify-center items-center'>
            <p className='text-slate-800 text-xl font-bold'>{text}</p>
        </div>
    )
}
