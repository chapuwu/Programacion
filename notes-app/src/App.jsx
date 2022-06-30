import { useState, useEffect } from 'react'
import './App.css'
import Nota from './components/Nota'

function App() {
    const [nota, setNotas] = useState([])
    const [titulo, setTitulo] = useState('')
    const [texto, setTexto] = useState('')

    //recuperando el estado del localstorage
    useEffect(() => {
        const localStorageNotes = JSON.parse(localStorage.getItem('notas'))
        if (localStorageNotes !== null) {
            setNotas(localStorageNotes)
        }
    }, [])

    // guardando el estado en el localstorage
    // probando script
    useEffect(() => {
        localStorage.setItem('notas', JSON.stringify(notas)) //
    }, [notas])

    function handleButtonClick() {
        const nota = {
            titulo: titulo,
            texto: texto,
        }
        setNotas([...notas, nota])
    }
    return (
        <div className='App'>
            <div className='container-texto'>
                <input
                    spellCheck={false}
                    type='text'
                    onChange={(event) => {
                        setTitulo(event.target.value)
                    }}
                />
                <textarea
                    spellCheck={false}
                    onChange={(event) => {
                        setTexto(event.target.value)
                    }}
                />
                <button onClick={handleButtonClick}>Agregar nota</button>
            </div>
            <ul>
                {notas.map((nota) => (
                    <Nota titulo={nota.titulo} texto={nota.texto} key={nota.titulo} />
                ))}
            </ul>
        </div>
    )
}

export default App
