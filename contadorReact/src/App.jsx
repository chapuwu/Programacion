import './App.css'
import { useReducer, useState } from 'react'

const ACTIONS = {
    ADD_TODO: 'add-todo',
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, NewTodo(action.payload.name)]
    }
}

function NewTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }

    console.log(todos)

    return (
        <form className='App' onSubmit={handleSubmit}>
            <input
                type='text'
                value={name}
                onChange={(event) => {
                    setName(event.target.value)
                }}
            />
        </form>
    )
}

export default App
