import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

export default function TodoElement({ text, onDelete }) {
    return (
        <li className='bg-slate-300 w-full flex justify-between items-center p-2 mb-2 rounded-md'>
            <p className='flex items-center'>{text}</p>
            <button className='h-8' onClick={() => onDelete(text)}>
                <MdDeleteForever className='h-full w-full' />
            </button>
        </li>
    )
}
