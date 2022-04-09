import { useState } from 'react'
import './App.css'

function App() {
    const [numero, setNumero] = useState('')

    function calculeitor() {}

    return (
        <div className='App'>
            <div className='campostextos'>
                <input type='number' />
                <p>+</p>
                <input type='number' />
                <button>calcular</button>
                <input type='number' />
                <p>-</p>
                <input type='number' />
                <button>calcular</button>
                <input type='number' />
                <p>x</p>
                <input type='number' />
                <button>calcular</button>
            </div>
        </div>
    )
}

export default App
