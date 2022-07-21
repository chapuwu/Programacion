export default function getInitialTodoItems(setTodoItems) {
    // todo: connect with the api using fetch
    fetch('http://localhost:3001/notes')
        .then((response) => response.json())
        .then((notes) => setTodoItems(notes))
}
