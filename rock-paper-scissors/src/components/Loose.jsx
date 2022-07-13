import React from 'react'

export default function Loose({ restartGame }) {
    return (
        <div className='w-screen h-screen absolute z-20 inset-0 justify-center items-center flex'>
            <div className='text-5xl flex py-20 justify-center items-center flex-col bg-red-700 p-32 shadow-xl rounded-xl shadow-black'>
                <p className='font-bold'>YOU LOOSE</p>
                <button
                    className='bg-red-400 mt-8 p-5 rounded text-3xl shadow-black shadow-md text-white hover:bg-red-300'
                    onClick={restartGame}>
                    Play Again
                </button>
            </div>
        </div>
    )
}
