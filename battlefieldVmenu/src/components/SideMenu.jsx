import React from 'react'
import SideMenuItem from './SideMenuItem'
import logo from '../../public/logo.png'

export default function SideMenu() {
    const items = ['Battlefield V', 'Battlefield 1', 'Battlefield 4', 'Pelotones', 'Ver', 'Noticias', 'Ayuda', 'Salir']

    return (
        <nav className='absolute w-96 bg-white font-purista'>
            <img src={logo} alt='' className='w-1/2 m-12' />
            <ul className='flex flex-col h-screen ml-12 text-neutral-600 text-xl'>
                {items.map((element) => (
                    <SideMenuItem text={element} key={element} />
                ))}
            </ul>
        </nav>
    )
}
