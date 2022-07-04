import React from 'react'
import oponente from '../img/niidea.png'
import paper from '../img/paper.png'

export default function Oponent() {
    return (
        <div className='flex mb-28'>
            <img src={oponente} alt='' className='h-40 rotate-180' />
            <div className='bg-blue-800 flex items-center justify-center absolute h-28 w-40 ml-2 mt-9 rounded-full'>
                <img src={paper} alt='' className='h-24' />
            </div>
        </div>
    )
}
