import { useState } from 'react'
import List from './List'
import './App.css'

function App() {
    const [textoInput, setTextoInput] = useState('')
    const [incompleteTodos, setIncompleteTodo] = useState<string[]>([])
    const [completeTodos, setCompleteTodos] = useState<string[]>([])

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTextoInput(event.target.value)
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        // add a new todo
        setIncompleteTodo([...incompleteTodos, textoInput])
    }

    function handleDelete(value: string) {
        setIncompleteTodo(incompleteTodos.filter((element) => element !== value))
    }

    function handleDone(value: string) {
        setIncompleteTodo(incompleteTodos.filter((element) => element !== value))
        setCompleteTodos([...completeTodos, value])
    }

    function handleEdit(value: string) {
        const newValue = prompt(value)
        if (newValue !== null) {
            setIncompleteTodo(
                incompleteTodos.map((element) => {
                    if (element === value) {
                        return newValue
                    } else {
                        return element
                    }
                }),
            )
        }
    }

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <input className='texto' type='text' onChange={handleInputChange} />
                <button className='boton-enviar' type='submit'>
                    Agregar Tarea
                </button>
            </form>
            <List elements={incompleteTodos} onDelete={handleDelete} onDone={handleDone} onEdit={handleEdit} />
            <List elements={completeTodos} />
        </div>
    )
}

export default App
