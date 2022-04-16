import React from 'react'

export default function PinnedIcon({ img, name }) {
    return (
        <div className='flex flex-col items-center'>
            <img src={new URL(`../assets/icons/${img}`, import.meta.url)} alt='' className='h-8' />
            <p className='text-center text-white text-xs mt-2'>{name}</p>
        </div>
    )
}
