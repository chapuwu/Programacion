import React from 'react'
import PinnedIcon from './PinnedIcon'
import arrow from '../assets/icons/arrow.svg'

const apps = [
    { img: 'edge.png', name: 'Edge' },
    { img: 'mail.png', name: 'Mail' },
    { img: 'calendar.png', name: 'Calendar' },
    { img: 'store.png', name: 'Microsoft Store' },
    { img: 'photos.png', name: 'Photos' },
    { img: 'settings.png', name: 'Settings' },
    { img: 'office.png', name: 'Office' },
    { img: 'solitaire.png', name: 'Solitaire' },
    { img: 'xbox.png', name: 'Xbox' },
    { img: 'spotify.png', name: 'Spotify' },
    { img: 'disney.png', name: 'Disney+' },
    { img: 'todo.png', name: 'To Do' },
    { img: 'clipchamp.png', name: 'Clipchamp' },
    { img: 'prime.jpg', name: 'Prime Video' },
    { img: 'tiktok.png', name: 'TikTok' },
    { img: 'instagram.png', name: 'Instagram' },
    { img: 'facebook.png', name: 'Facebook' },
    { img: 'calculator.png', name: 'Calculator' },
]

export default function PinnedApps() {
    return (
        <div className='h-70 mx-4'>
            <div className='flex justify-between mx-6 my-3 mt-6'>
                <h3 className='text-white font-bold text-sm'>Pinned</h3>
                <button className='text-white text-sm flex items-center bg-white bg-opacity-10 px-2 py-1 rounded'>
                    All apps <img src={arrow} alt='' className='inline h-5 ml-2' />
                </button>
            </div>
            <ul className='grid grid-cols-6 grid-rows-3 h-full'>
                {apps.map((app) => {
                    return (
                        <li key={app.name}>
                            <PinnedIcon img={app.img} name={app.name} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
