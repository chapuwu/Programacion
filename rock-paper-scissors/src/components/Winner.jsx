import React from 'react'

export default function Winner({ restartGame }) {
    return (
        <div className='w-screen h-screen absolute z-20 inset-0 justify-center items-center flex'>
            <div className='text-5xl py-20 flex justify-center items-center flex-col bg-green-600 p-32 rounded-xl shadow-xl shadow-black'>
                <p className='font-bold'>WINNER</p>
                <button
                    className='mt-8 bg-green-400 p-5 rounded text-3xl shadow-black shadow-md text-white hover:bg-green-300'
                    onClick={restartGame}>
                    Play Again
                </button>
            </div>
        </div>
    )
}
