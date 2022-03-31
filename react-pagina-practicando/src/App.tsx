import './App.css'
import Input from './Input'
import NavBar from './NavBar'
import React, { useState } from 'react'
import TarjetaPersona from './TarjetaPersona'

interface Persona {
    nombre: string
    descripcion: string
    imagen: string
}

function App() {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [imagen, setImagen] = useState('')
    const [personas, setPersonas] = useState([] as Persona[])

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        if (nombre.trim() === '') {
            alert('el nombre no puede estar vacio')
            return
        }

        if (descripcion.trim() === '') {
            alert('la descripcion nunca esta vacio pibe')
            return
        }

        if (imagen.trim() === '') {
            alert('tenes que poner una foto flaco')
            return
        }

        const persona: Persona = {
            nombre: nombre,
            descripcion: descripcion,
            imagen: imagen,
        }

        setPersonas([...personas, persona])
    }

    return (
        <div className='App'>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <Input labelName='nombre' onChange={(value) => setNombre(value)} />
                <Input labelName='descripcion' onChange={(value) => setDescripcion(value)} />
                <Input labelName='imagen' onChange={(value) => setImagen(value)} />
                <button type='submit'>agregar</button>
            </form>
            <div className='tarjetas'>
                {personas.map((persona) => (
                    <TarjetaPersona nombre={persona.nombre} descripcion={persona.descripcion} imagen={persona.imagen} />
                ))}
            </div>
        </div>
    )
}

export default App
