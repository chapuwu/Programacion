import React from 'react'

export default function SideMenuItem({ text, img }) {
    return (
        <li className='flex items-center w-full h-10 hover:border-r-4 hover:transition hover:border-orange-500 mt-3'>
            <img src={new URL(`../public/${img}`, import.meta.url)} alt='' className='h-6' />
            <button className='uppercase ml-5 hover:text-black hover:scale-110'>{text}</button>
        </li>
    )
}
