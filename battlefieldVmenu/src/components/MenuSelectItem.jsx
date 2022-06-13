import React from 'react'

export default function MenuSelectItem({ text }) {
    return (
        <button className='text-white uppercase mt-3 hover:scale-125 px-3 py-1 hover:bg-white hover:text-black transition-all'>
            {text}
        </button>
    )
}
