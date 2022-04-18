import React from 'react'

export default function RecommendedIcon2({ img, name, fecha }) {
    return (
        <div className='flex mt-4 justify-center items-center'>
            <img src={new URL(`../assets/icons/${img}`, import.meta.url)} alt='' className='h-7' />{' '}
            <div className='flex flex-col'>
                <p className='text-white ml-4 text-sm'>{name}</p>
                <p className='text-zinc-300 text-xs text-center ml-4'>{fecha}</p>
            </div>
        </div>
    )
}
