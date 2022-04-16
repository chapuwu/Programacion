import React from 'react'
import arrow from '../assets/icons/arrow.svg'
import notas from '../assets/icons/onenote.png'
import imagen from '../assets/icons/image.png'

const Recommended = [
    { img: 'onenote.png', name: 'Mis notas' },
    { img: 'image.png', name: '7.png' },
    { img: 'image.png', name: '5.png' },
    { img: 'image.png', name: 'tif.jpg' },
    { img: 'image.png', name: '6.png' },
    { img: 'image.png', name: '4.png' },
]

export default function RecommendedIcon() {
    return (
        <div className='h-48 w-3/4 bg-white mt-20'>
            <div>
                <ul>
                    {Recommended.map((icons) => {
                        return <li></li>
                    })}
                </ul>
            </div>
        </div>
    )
}
