import { useState } from 'react'
import './App.css'

function App() {
    const [numero, setNumero] = useState(0)

    function handleClickDisminuir() {
        setNumero(numero - 1)
    }

    function handleClickReset() {
        setNumero(0)
    }

    function handleClickAumentar() {
        setNumero(numero + 1)
    }

    return (
        <div className='App'>
            <p>{numero}</p>
            <button onClick={handleClickDisminuir}>disminuir</button>
            <button onClick={handleClickReset}>reset</button>
            <button onClick={handleClickAumentar}>aumentar</button>
        </div>
    )
}

export default App
