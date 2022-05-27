import React from 'react'
import MenuSelectItem from './MenuSelectItem'

export default function MenuSelect() {
    const lista = ['jugar', 'tu compañía', 'armería', 'misiones semanales', 'misiones', 'perfil']

    return (
        <div className='font-futura'>
            {lista.map((element) => (
                <MenuSelectItem text={element} key={element} />
            ))}
        </div>
    )
}
