import React from 'react'
import oponente from '../img/niidea.png'
import paper from '../img/paper.png'

export default function Oponent() {
    return (
        <div>
            <div className='bg-blue-800 flex items-center justify-center absolute ml-2 mt-3 h-28 w-40 rounded-full'>
                <img src={paper} alt='' className='h-32' />
            </div>
            <img src={oponente} alt='' className='h-40 rotate-180 mb-10' />
        </div>
    )
}
