import React from 'react'
import BarNavItems from './BarNavItems'

export default function BarNav() {
    const navItems = ['Servidores', 'Comprar Vip', 'SourceBans']
    return (
        <ul className='flex justify-around'>
            <li>
                {navItems.map((item) => (
                    <BarNavItems text={item} key={item} />
                ))}
            </li>
        </ul>
    )
}
