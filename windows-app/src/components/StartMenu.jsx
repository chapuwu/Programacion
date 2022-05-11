import React from 'react'
import lupa from '../assets/icons/lupa.png'
import PinnedApps from './PinnedApps'
import RecommendedIcon from './RecommendedIcon'
import Footer from './Footer'

export default function StartMenu() {
    return (
        <div className='flex items-center flex-col bg-gray-900 bg-opacity-80 w-1/3 h-3/4 mb-3 rounded-lg backdrop-blur-lg border-solid border border-gray-700/60'>
            <div className='flex items-center mt-7 w-10/12 bg-zinc-800 border-b-2 border-sky-300'>
                <img src={lupa} alt='' className='h-4 ml-3' />
                <input
                    type='text'
                    className='w-full h-9 bg-zinc-800 text-white outline-none ml-4 placeholder:text-white'
                    placeholder='Type here to search'
                />
            </div>
            <PinnedApps />
            <RecommendedIcon />
            <Footer />
        </div>
    )
}
