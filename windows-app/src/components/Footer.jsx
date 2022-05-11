import React from 'react'
import perfil from '../assets/icons/profile.jpg'
import apagar from '../assets/icons/power-off.png'

export default function Footer() {
    return (
        <div className='border border-gray-700/60 flex h-17 w-full justify-between items-center bg-black bg-opacity-20  '>
            <div className='flex ml-10 h-2/4 items-center hover:bg-white/10 rounded px-2 py-5'>
                <img src={perfil} alt='' className='h-8 rounded-full' />
                <p className='text-white ml-2 text-xs'>LiaraNet</p>
            </div>
            <div className='mr-6 hover:bg-white/10 rounded px-4 py-3'>
                <img src={apagar} alt='' className='h-4' />
            </div>
        </div>
    )
}
