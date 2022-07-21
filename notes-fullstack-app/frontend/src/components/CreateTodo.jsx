import { useState } from 'react'

export default function CreateTodo({ createTodoItem }) {
    const [inputValue, setInputValue] = useState('')

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            createTodoItem(inputValue)
            setInputValue('')
        }
    }

    const handleButtonClick = () => {
        createTodoItem(inputValue)
        setInputValue('')
    }

    return (
        <div>
            <input
                className='uppercase rounded m-2 p-2 bg-slate-700 border-black border active:outline-none focus:outline-none focus:border-slate-500 transition-colors duration-200'
                spellCheck={false}
                type='text'
                onKeyDown={handleKeyDown}
                onChange={(event) => setInputValue(event.target.value)}
                value={inputValue}
            />
            <button
                className='uppercase font-bold bg-slate-800 py-2 px-4 rounded-md text-slate-300 hover:text-white transition-colors duration-200'
                onClick={handleButtonClick}>
                add
            </button>
        </div>
    )
}
