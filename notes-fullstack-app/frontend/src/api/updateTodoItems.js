export default function updateTodoItems(todoItems) {
    // todo: send the new todoItems list to the backend api
    fetch('http://localhost:3001/notes', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoItems),
    })
}
