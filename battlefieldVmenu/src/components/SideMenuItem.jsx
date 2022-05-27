import React from 'react'

export default function SideMenuItem({ text }) {
    return (
        <li>
            <button className='uppercase'>{text}</button>
        </li>
    )
}
