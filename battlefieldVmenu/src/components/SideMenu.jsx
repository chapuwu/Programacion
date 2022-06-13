import React from 'react'
import SideMenuItem from './SideMenuItem'
import logo from '../../public/logo.png'
import banner from '../public/banner.png'
import play from '../public/play.png'
import burger from '../public/burger.png'
import help from '../public/help.png'
import off from '../public/off.png'
import btvlogo from '../public/btvlogo.jpg'
import bt1icon from '../public/bt1logo.webp'
import bt4icon from '../public/bt4icon.png'

export default function SideMenu({ showSideMenu }) {
    const items = [
        { img: btvlogo, text: 'Battlefield V' },
        { img: bt1icon, text: 'Battlefield 1' },
        { img: bt4icon, text: 'Battlefield 4' },
        { img: banner, text: 'Pelotones' },
        { img: play, text: 'Ver' },
        { img: burger, text: 'Noticias' },
        { img: help, text: 'Ayuda' },
        { img: off, text: 'Salir' },
    ]

    return (
        <nav className={`absolute w-96 h-full bg-white font-purista z-20 -left-${showSideMenu ? 0 : 96}`}>
            <img src={logo} alt='' className='w-1/2 m-12' />
            <ul className='flex flex-col ml-12 text-neutral-600 text-xl'>
                {items.map((item) => (
                    <SideMenuItem text={item.text} img={item.img} key={item.text} />
                ))}
            </ul>
        </nav>
    )
}
