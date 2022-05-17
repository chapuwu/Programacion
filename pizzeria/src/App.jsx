import { useState } from 'react'
import Input from './components/Input'
import Notas from './components/Notas'

function App() {
    const [notas, setNotas] = useState([])

    return (
        <div className='bg-gray-500 h-screen overflow-y-auto w-screen flex items-center flex-col'>
            <Input
                onNewText={(titulo, nota) => {
                    setNotas([...notas, { titulo, nota }])
                }}
            />
            <Notas notas={notas} />
        </div>
    )
}

export default App
