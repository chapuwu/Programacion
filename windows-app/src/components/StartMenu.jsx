import React from 'react'
import lupa from '../assets/icons/lupa.png'
import PinnedIcons from './PinnedIcon'

export default function StartMenu() {
    return (
        <div className='bg-gray-900 w-1/3 h-3/4 mb-3 rounded-lg'>
            <div className='flex items-center ml-11 mt-7 w-4/5 bg-zinc-800 border-b-2 border-sky-300'>
                <img src={lupa} alt='' className='h-4 ml-3' />
                <input
                    type='text'
                    className='w-4/5 h-9 bg-zinc-800 text-white outline-none ml-4 placeholder:text-white'
                    placeholder='Type here to search'
                />
            </div>
            <PinnedIcons />
        </div>
    )
}
