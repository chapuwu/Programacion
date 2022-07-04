import React from 'react'
import Paper from '../img/paper.png'

export default function Paper() {
    return (
        <div>
            <div className='bg-green-800 flex items-center justify-center absolute ml-2 mt-3 h-28 w-40 rounded-full'>
                <img src={Paper} alt='' className='h-24' />
            </div>
        </div>
    )
}
