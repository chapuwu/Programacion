import React from 'react'
import globo from '../img/globo.png'
import Icon from './Icon'

export default function Oponent({ botOption }) {
    return (
        <div className='relative'>
            <Icon option={botOption} />
            <img src={globo} alt='' className='h-40 rotate-180 absolute inset-0' />
        </div>
    )
}
