import React from 'react'
import miturno from '../img/niidea.png'

import Icon from './Icon'

export default function MyTurn({ drawOption }) {
    return (
        <div>
            <Icon drawOption={drawOption} />
            <img src={miturno} alt='' className='h-40' />
        </div>
    )
}
