import React from 'react'
import RecommendedIcon2 from './RecommendedIcon2'

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
                <h2 className='text-white text-sm'>Recommended</h2>
                <button className='text-white text-sm'>More</button>
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
