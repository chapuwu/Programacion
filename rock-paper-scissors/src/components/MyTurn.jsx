import React from 'react'
import globo from '../img/globo.png'

import Icon from './Icon'

export default function MyTurn({ drawOption }) {
    return (
        <div>
            <Icon option={drawOption} />
            <img src={globo} alt='' className='h-40' />
        </div>
    )
}
