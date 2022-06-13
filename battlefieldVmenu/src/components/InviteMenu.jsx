import React from 'react'
import plus from '../public/plus.svg'
import elizabeth from '../public/elizabeth.jpeg'
import chat from '../public/chat.svg'
import group from '../public/group.svg'

export default function InviteMenu() {
    return (
        <div className='flex flex-row absolute right-20'>
            <img src={elizabeth} alt='' className='h-7 w-7 mr-1' />
            <div className='mr-1 flex hover:bg-slate-300 hover:bg-opacity-30'>
                <img src={plus} alt='' className='bg-black bg-opacity-50 h-7' />
                <div className='h-full w-7 absolute bg-black bg-opacity-30'></div>
            </div>
            <div className='flex mr-1 hover:bg-slate-300 hover:bg-opacity-30'>
                <img src={plus} alt='' className='bg-black bg-opacity-50 h-7' />
                <div className='h-full w-7 absolute bg-black bg-opacity-30'></div>
            </div>
            <div className='mr-1 hover:bg-slate-300 hover:bg-opacity-30 flex'>
                <img src={plus} alt='' className='bg-black bg-opacity-50 h-7' />
                <div className='h-full w-7 absolute bg-black bg-opacity-30'></div>
            </div>
            <div className='mr-1 h-7 w-7 justify-center flex items-center bg-black bg-opacity-50'>
                <img src={chat} alt='' className='h-5' />
                <div className='h-full bg-black w-6 bg-opacity-40 absolute'></div>
            </div>
            <div className='bg-black h-7 w-12 justify-center items-center bg-opacity-50 mr-1 flex flex-row hover:bg-white hover:bg-opacity-10'>
                <img src={group} alt='' className='' />
                <p className='text-white ml-2'>0</p>
            </div>
        </div>
    )
}
