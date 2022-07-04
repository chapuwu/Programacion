import React from 'react'
import Scissors from '../img/scissor.png'

export default function Scissors() {
    return (
        <div>
            <div className='bg-blue-800 flex items-center justify-center absolute ml-2 mt-3 h-28 w-40 rounded-full'>
                <img src={Paper} alt='' className='h-24' />
            </div>
        </div>
    )
}
