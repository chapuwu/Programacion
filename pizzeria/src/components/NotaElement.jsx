import { useEffect, useState } from 'react'

export default function NotaElement({ text, titulo }) {
    const [color, setColor] = useState('')
    const colors = ['bg-red-700', 'bg-orange-600', 'bg-lime-700', 'bg-teal-500', 'bg-sky-900', 'bg-violet-700']

    useEffect(() => {
        setColor(colors[Math.floor(Math.random() * colors.length)])
    }, [])
    return (
        <li className={`p-2 h-52 text-center rounded ${color}`}>
            <h1 className='m-1 text-xl font-bold underline'>{titulo}</h1>
            <p>{text}</p>
        </li>
    )
}
