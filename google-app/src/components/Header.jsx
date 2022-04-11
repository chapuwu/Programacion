import React from 'react'
import './Header.css'
import Cuadrado from './Cuadrado'

export default function Header() {
    return (
        <div className='header'>
            <a href='https://mail.google.com/mail/&ogbl'>Gmail</a>
            <a href='https://www.google.com.ar/imghp'>Images</a>
            <Cuadrado />
            <img
                className='perfil'
                src='https://cdn.discordapp.com/attachments/729713059781673020/963205581148160101/unknown.png'
                alt='liara'
            />
        </div>
    )
}
