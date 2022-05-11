import React from 'react'
import RecommendedIcon2 from './RecommendedIcon2'
import arrow from '../assets/icons/arrow.svg'

const Recommended = [
    { img: 'onenote.png', name: 'Mis notas', fecha: 'Tuesday at 7:02 PM' },
    { img: 'image.png', name: '7.png', fecha: '16 Mar' },
    { img: 'image.png', name: '5.png', fecha: '16 Mar' },
    { img: 'image.png', name: 'tif.jpg', fecha: '21 Mar' },
    { img: 'image.png', name: '6.png', fecha: '16 Mar' },
    { img: 'image.png', name: '4.png', fecha: '16 Mar' },
]

export default function RecommendedIcon() {
    return (
        <div className='h-48 w-11/12 mt-16'>
            <div className='flex justify-between'>
                <h2 className='text-white text-sm font-bold'>Recommended</h2>
                <button className='text-white text-xs flex items-center bg-white bg-opacity-10 px-2 py-1 rounded'>
                    More <img src={arrow} alt='' className='inline h-5 ml-2' />
                </button>
            </div>
            <div>
                <ul className='grid grid-cols-2 grid-rows-3 h-full'>
                    {Recommended.map((Recommended) => {
                        return (
                            <li key={Recommended.name}>
                                <RecommendedIcon2
                                    img={Recommended.img}
                                    name={Recommended.name}
                                    fecha={Recommended.fecha}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
