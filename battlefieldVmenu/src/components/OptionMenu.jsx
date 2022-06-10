import React from 'react'
import OptionMenuItems from './OptionMenuItems'
import optionsimg from '../public/optionsimg.png'
import volumeimg from '../public/volumeimg.png'
import displayimg from '../public/displayimg.png'

export default function OptionMenu() {
    const opciones = [
        { img: optionsimg, text: 'controles' },
        { text: 'jugabilidad' },
        { img: volumeimg, text: 'sonido' },
        { img: displayimg, text: 'video' },
        { text: 'asignar controles' },
    ]

    return (
        <div className='flex justify-center items-center h-full w-full bg-slate-700'>
            <div className='flex justify-center items-center  h-3/4 w-3/4'>
                {opciones.map((element) => (
                    <OptionMenuItems text={element.text} img={element.img} key={element} />
                ))}
            </div>
        </div>
    )
}
