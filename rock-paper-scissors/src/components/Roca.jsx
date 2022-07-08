import React from 'react'
import Roca from '../img/rock.png'

export default function Rock() {
    return (
        <div className='bg-red-800 flex items-center justify-center absolute ml-2 mt-3 h-28 w-40 rounded-full'>
            <img src={Roca} alt='' className='h-24' />
        </div>
    )
}
