import { useState } from 'react'
import Input from './components/Input'
import Todos from './components/Todos'

function App() {
    const [tareas, setTareas] = useState([])
    function handleDelete(text) {
        setTareas(tareas.filter((element) => element !== text))
    }
    return (
        <div className='App flex justify-center items-center w-screen h-screen bg-blue-900'>
            <div className='bg-slate-200 h-3/5 p-3 rounded shadow-black shadow overflow-y-auto'>
                <h1 className='text-3xl font-bold'>Todo App</h1>
                <Input
                    onNewTodo={(tarea) => {
                        setTareas([...tareas, tarea])
                    }}
                />
                <Todos tareas={tareas} onDelete={handleDelete} />
            </div>
        </div>
    )
}

export default App
