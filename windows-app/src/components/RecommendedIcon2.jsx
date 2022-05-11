import React from 'react'

export default function RecommendedIcon2({ img, name, fecha }) {
    return (
        <div className='flex mt-3 ml-3 justify-start items-center hover:bg-white/10 rounded'>
            <img src={new URL(`../assets/icons/${img}`, import.meta.url)} alt='' className='h-5' />
            <div className='flex flex-col'>
                <p className='text-white ml-4 text-sm'>{name}</p>
                <p className='text-zinc-300 text-xs text-center ml-4'>{fecha}</p>
            </div>
        </div>
    )
}
