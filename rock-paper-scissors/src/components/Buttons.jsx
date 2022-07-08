import React from 'react'
import Rock from '../img/rock.png'
import paper from '../img/paper.png'
import scissor from '../img/scissor.png'

export default function Buttons({ setDrawOption, playRound }) {
    return (
        <div>
            <button
                className='bg-red-800 rounded-md p-4 m-3 hover:bg-slate-400'
                onClick={() => {
                    setDrawOption('piedra')
                    playRound()
                }}>
                <img src={Rock} alt='' className='h-32' />
            </button>
            <button
                className='bg-green-800 rounded-md p-4 m-3 hover:bg-slate-400'
                onClick={() => {
                    setDrawOption('papel')
                }}>
                <img src={paper} alt='' className='h-32' />
            </button>
            <button
                className='bg-blue-800 rounded-md p-4 hover:bg-slate-400 m-3'
                onClick={() => {
                    setDrawOption('tijera')
                }}>
                <img src={scissor} alt='' className='h-32' />
            </button>
        </div>
    )
}
