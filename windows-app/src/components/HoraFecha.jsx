import { useEffect, useState } from 'react'
import internet from '../assets/icons/network.png'
import sonido from '../assets/icons/sound.png'
import arrow from '../assets/icons/arrow.svg'

export default function HoraFecha() {
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    useEffect(() => {
        setInterval(() => {
            const now = new Date()
            setFecha(`${now.getUTCDay()}/${now.getUTCMonth()}/${now.getUTCFullYear()}`)
            setHora(`${now.getHours()}:${now.getMinutes()}`)
        }, 1000)
    }, [])

    return (
        <div className='absolute right-2 flex items-center h-full'>
            <img src={arrow} alt='' className='h-5 m-1 -rotate-90' />
            <img src={internet} alt='' className='h-4 m-1' />
            <img src={sonido} alt='' className='h-4 m-1' />
            <div className='text-right mx-3'>
                <p className='text-white text-xs font-bold'>{hora}</p>
                <p className='text-white text-xs font-bold'>{fecha}</p>
            </div>
        </div>
    )
}
