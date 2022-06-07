import React from 'react'
import SideMenuItem from './SideMenuItem'
import logo from '../../public/logo.png'

export default function SideMenu() {
    const items = [
        { img: 'banner.png', text: 'Pelotones' },
        { img: 'play.png', text: 'Ver' },
        { img: 'burger.png', text: 'Noticias' },
        { img: 'help.png', text: 'Ayuda' },
        { img: 'off.png', text: 'Salir' },
    ]

    return (
        <nav className='absolute w-96 bg-white font-purista'>
            <img src={logo} alt='' className='w-1/2 m-12' />
            <ul className='flex flex-col h-screen ml-12 text-neutral-600 text-xl'>
                {items.map((item) => (
                    <SideMenuItem text={item.text} img={item.img} key={item} />
                ))}
            </ul>
        </nav>
    )
}
