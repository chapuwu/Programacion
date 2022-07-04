import React from 'react'
import miturno from '../img/niidea.png'
import rock from '../img/rock.png'

export default function MyTurn() {
    return (
        <div>
            <div className='bg-red-800 flex items-center justify-center absolute ml-2 mt-3 h-28 w-40 rounded-full'>
                <img src={rock} alt='' className='h-24' />
            </div>
            <img src={miturno} alt='' className='h-40' />
        </div>
    )
}
