import React from 'react'

export default function OptionMenuItems({ text, img }) {
    return (
        <div className='h-full w-4/5 flex justify-center items-center'>
            <button className='text-white uppercase text-sm font-bold bg-black bg-opacity-70 h-3/4 w-full mx-1 hover:bg-slate-50 hover:bg-opacity-25 flex flex-col justify-center items-center hover:text-gray-800'>
                <img src={img} alt='' className='h-28 mb-36' />
                {text}
            </button>
        </div>
    )
}
