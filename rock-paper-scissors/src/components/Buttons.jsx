import React from 'react'
import Roca from './Roca'
import Tijera from './Tijera'
import Papel from './Papel'

export default function Buttons({ setDrawOption }) {
    return (
        <div>
            <button
                className='bg-red-800 rounded-md p-4 m-3 hover:bg-slate-400'
                onClick={() => {
                    setDrawOption('piedra')
                }}>
                <Roca />
            </button>
            <button
                className='bg-green-800 rounded-md p-4 m-3 hover:bg-slate-400'
                onClick={() => {
                    setDrawOption('papel')
                }}>
                <Tijera />
            </button>
            <button
                className='bg-blue-800 rounded-md p-4 hover:bg-slate-400 m-3'
                onClick={() => {
                    setDrawOption('tijera')
                }}>
                <Papel />
            </button>
        </div>
    )
}
