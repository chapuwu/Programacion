import { useState } from 'react'
import TaskBar from './components/TaskBar'
import StartMenu from './components/StartMenu'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='App w-screen h-screen flex flex-col justify-end items-center'>
            <StartMenu />
            <TaskBar />
        </div>
    )
}

export default App
