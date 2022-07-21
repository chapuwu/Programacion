import { useEffect, useState } from 'react'
import getInitialTodoItems from './api/getInitialTodoItems'
import updateTodoItems from './api/updateTodoItems'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {
    const [todoItems, setTodoItems] = useState([])

    const deleteTodoItem = (todoItem) => {
        const newList = todoItems.filter((item) => item !== todoItem)
        setTodoItems(newList)
        // send the new list to the server
        updateTodoItems(newList)
    }

    const changeStatus = (todoItem) => {
        // find the modified item and change its "complete" value
        const newList = todoItems.map((item) => {
            if (todoItem === item) {
                return {
                    text: todoItem.text,
                    complete: !todoItem.complete,
                }
            }
            return item
        })

        setTodoItems(newList)
        // send the new list to the server
        updateTodoItems(newList)
    }

    const createTodoItem = (text) => {
        const newList = [...todoItems, { complete: false, text }]

        setTodoItems(newList)
        // send the new list to the server
        updateTodoItems(newList)
    }

    // just once, when loading the page
    useEffect(() => {
        // fetch the backend api
        getInitialTodoItems(setTodoItems)
    }, [])

    return (
        <div className='w-screen h-screen bg-slate-900 text-white text-lg flex flex-col justify-center items-center'>
            <CreateTodo createTodoItem={createTodoItem} />
            <TodoList todoItems={todoItems} deleteTodoItem={deleteTodoItem} changeStatus={changeStatus} />
        </div>
    )
}

export default App
