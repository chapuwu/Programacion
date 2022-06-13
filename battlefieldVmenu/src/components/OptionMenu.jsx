import React from 'react'
import OptionMenuItems from './OptionMenuItems'
import option from '../public/option.svg'
import volume from '../public/volume.svg'
import display from '../public/display.svg'
import flechita from '../public/flechita.svg'
import star from '../public/star.svg'
import more from '../public/more.svg'
import InviteMenu from './InviteMenu'

export default function OptionMenu() {
    const opciones = [
        { img: option, text: 'controles' },
        { text: 'jugabilidad' },
        { img: volume, text: 'sonido' },
        { img: display, text: 'video' },
        { text: 'asignar controles' },
    ]

    return (
        <div className='flex flex-col items-center justify-center h-screen w-screen'>
            <div className='flex flex-col justify-center items-center h-4/5 w-4/5'>
                <div className='flex w-full ml-64'>
                    <h1 className='text-slate-200 uppercase text-4xl'>opciones</h1>
                </div>
                <div className='flex justify-center items-center h-full w-full'>
                    {opciones.map((element) => (
                        <OptionMenuItems text={element.text} img={element.img} key={element} />
                    ))}
                </div>
            </div>
            <div className='flex w-full absolute bottom-10 left-10'>
                <div className='h-full flex mr-10 hover:bg-white'>
                    <img src={flechita} alt='' className='bg-white h-full mr-1' />
                    <button className='uppercase text-white hover:text-black'>atras</button>
                </div>
                <div className='h-full flex mr-10 hover:bg-white'>
                    <img src={more} alt='' className='bg-white h-full mr-1' />
                    <button className='uppercase text-white hover:text-black'>acerca de</button>
                </div>
                <div className='h-full flex mr-10 hover:bg-white'>
                    <img src={star} alt='' className='bg-white h-full mr-2' />
                    <button className='uppercase text-white hover:text-black'>creditos</button>
                </div>
                <InviteMenu />
            </div>
        </div>
    )
}
