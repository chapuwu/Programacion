import React from 'react'

export default function Desplegable({ numero }) {
    return (
        <ul className={`bg-blue-500 opacity-${numero} w-32 text-center`}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
    )
}
