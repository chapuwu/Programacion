import React from 'react'
import edge from '../assets/icons/edge.png'
import mail from '../assets/icons/mail.png'

export default function PinnedIcon() {
    return (
        <div>
            <div className='flex justify-between mt-6'>
                <h1 className='text-white ml-10 font-sans'>Pinned</h1>
                <button className='text-white mr-10'>All apps</button>
            </div>
            <div className='flex'>
                <div className='flex flex-col w-9 mt-3 bg-white'>
                    <img src={edge} alt='' className='h-8' />
                    <p className='text-white'>Edge</p>
                </div>
                <div className='flex flex-col w-9 mt-3 bg-white'>
                    <img src={mail} alt='' />
                    <p className='text-white'>Mail</p>
                </div>
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
            </div>
        </div>
    )
}
