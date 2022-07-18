import React from 'react'

export default function RoundWin() {
    return (
        <div className='flex justify-center items-center w-screen h-screen absolute z-20 inset-0'>
            <div className='text-green-600 flex items-center justify-center text-5xl font-bold'>Se gano</div>
        </div>
    )
}
