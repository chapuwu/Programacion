import { useState } from 'react'
import Input from './components/Input'
import Notas from './components/Notas'

function App() {
    const [notas, setNotas] = useState([])

    return (
        <div className='bg-gray-500 h-screen w-screen flex justify-center items-center flex-col'>
            <Input
                onNewText={(nota) => {
                    setNotas([...notas])
                }}
            />
            <Notas />
        </div>
    )
}

export default App
