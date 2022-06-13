import React from 'react'

export default function WelcomeItems({ text, mapa, slots }) {
    return (
        <li className='bg-slate-800 w-20'>
            <button>{text}</button>
            {mapa}
            {slots}
        </li>
    )
}
