import React from 'react'

export default function OptionMenuItems({ text, img }) {
    return (
        <div className='h-full w-4/5 flex justify-center items-center'>
            <button className='text-white  uppercase bg-slate-800 h-3/4 w-full mx-1 hover:bg-slate-50 hover:bg-opacity-25 flex flex-col justify-center items-center'>
                <img src={img} alt='' className='h-28 mb-36' />
                {text}
            </button>
        </div>
    )
}
