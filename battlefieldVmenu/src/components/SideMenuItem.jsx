import React from 'react'

export default function SideMenuItem({ text, img }) {
    return (
        <li className='flex items-center w-full h-10 hover:border-r-4 transition hover:border-orange-500 mt-3'>
            <div className='w-8 h-8'>
                <img src={img} alt='' className='h-full w-full object-cover' />
            </div>
            <button className='uppercase ml-5 hover:text-black hover:scale-110'>{text}</button>
        </li>
    )
}
