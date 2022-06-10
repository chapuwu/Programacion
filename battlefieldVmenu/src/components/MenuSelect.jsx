import React from 'react'
import MenuSelectItem from './MenuSelectItem'
import btvlogo from '../public/btvlogo.png'

export default function MenuSelect() {
    const lista = ['jugar', 'tu compañía', 'armería', 'misiones semanales', 'misiones', 'perfil']

    return (
        <div className='font-futura w-1/4 h-3/4'>
            <div className='flex w-full justify-center h-36 items-center'>
                <img src={btvlogo} alt='' className='h-11' />
            </div>
            <div className='flex justify-center items-end w-full h-full'>
                <div className='flex flex-col items-center'>
                    {lista.map((element) => (
                        <MenuSelectItem text={element} key={element} />
                    ))}
                    <div className='flex justify-center mt-5 ml-20 w-full mb-5'>
                        <button className='text-white uppercase mt-10 hover:scale-100 px-3 py-1 hover:bg-white text-xs'>
                            opciones
                        </button>
                        <button className='text-white uppercase mt-10 hover:scale-100 px-3 py-1 ml-5 hover:bg-white text-xs'>
                            salir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
