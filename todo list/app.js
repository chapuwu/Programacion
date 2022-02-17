const botonEnviar = document.querySelector('.enviar')

const input = document.querySelector('.texto')

const ul = document.querySelector('.add-list > ul')

const todos = restoreFromLocalStorage()

botonEnviar.addEventListener('click', () => {
    addNewTodo(input.value)
    // agregar a la lista de todos
    todos.push(input.value)
    updateLocalStorage()
    input.value = ''
})

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addNewTodo(input.value)
        // agregar a la lista de todos
        todos.push(input.value)
        updateLocalStorage()
        input.value = ''
    }
})

function addNewTodo(todo) {
    const li = document.createElement('li')

    // creando iconos
    const done = document.createElement('i')
    done.innerText = 'done'
    done.classList.add('material-icons')
    const close = document.createElement('i')
    close.innerText = 'close'
    close.classList.add('material-icons')
    const edit = document.createElement('i')
    edit.innerText = 'edit'
    edit.classList.add('material-icons')

    // dandole funcionalidad a los botones
    done.addEventListener('click', () => completeTodo(todo, li))
    close.addEventListener('click', () => removeTodo(todo, li))
    edit.addEventListener('click', () => editTodo(todo, li))

    // creando span
    const span = document.createElement('span')
    span.classList.add('iconos')

    // metiendo los iconos adentro de span
    span.appendChild(done)
    span.appendChild(close)
    span.appendChild(edit)

    // agregando el todo a li
    li.innerText = todo
    li.appendChild(span)

    // agregandolo al dom
    ul.appendChild(li)
}

function completeTodo(todo, element) {}

function removeTodo(todo, element) {
    element.remove()

    // borrando el elemento del array
    const index = todos.indexOf(todo)
    if (index !== -1) {
        todos.splice(index, 1)
        updateLocalStorage()
    }
}

function editTodo(todo, element) {
    const newTodo = prompt('edit todo: ', todo)
    element.childNodes[0].textContent = newTodo
    const index = todos.indexOf(todo)
    if (index !== -1) {
        todos[index] = newTodo
    }
    updateLocalStorage()
}

function updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function restoreFromLocalStorage() {
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    if (localTodos === null) {
        return []
    } else {
        for (let i = 0; i < localTodos.length; i++) {
            addNewTodo(localTodos[i])
        }
        return localTodos
    }
}
