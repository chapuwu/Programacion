const uncompletedUl = document.querySelector('#uncompleted')
const completedUl = document.querySelector('#completed')

const input = document.querySelector('#todo-input')
const add = document.querySelector('#todo-add')

const state = getLocalStorageState()

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        todoInput(input.value)
        input.value = ''
        e.preventDefault()
    }
})

add.addEventListener('click', () => {
    todoInput(input.value)
    input.value = ''
})

// this will be called whenever we add a new todo, either by clicking the add button or by pressing the enter key
function todoInput(todo) {
    const li = createLiElement(todo, true)
    // add a new li element
    uncompletedUl.appendChild(li)

    // modify the state
    state.incompleteTodos.push(todo)

    // sync the state with the local storage
    updateLocalStorageState()
}

function createLiElement(text, isNew) {
    // li element for the DOM
    const li = document.createElement('li')
    li.textContent = text

    // only add done and delete buttons if its a new todo
    if (isNew) {
        // done button
        const doneButton = document.createElement('button')
        doneButton.innerText = '✔️'
        doneButton.addEventListener('click', () => doneTodo(li))
        li.appendChild(doneButton)

        // delete todo button
        const deleteButton = document.createElement('button')
        deleteButton.innerText = '❌'
        deleteButton.addEventListener('click', () => deleteTodo(li))
        li.appendChild(deleteButton)
    }

    return li
}

function doneTodo(li) {
    const todo = li.childNodes[0].textContent
    // delete the old li element and create a new one for the completed ul
    const newLi = createLiElement(todo)
    completedUl.appendChild(newLi, false)
    li.remove()

    // modify the app's state
    remove(state.incompleteTodos, todo)
    state.completedTodos.push(todo)

    // sync the state with the local storage
    updateLocalStorageState()
}

function deleteTodo(li) {
    // modify the state
    remove(state.incompleteTodos, li.childNodes[0].textContent)

    // sync the state with the local storage
    updateLocalStorageState()

    // dete the li element
    li.remove()
}

function remove(array, element) {
    const index = array.indexOf(element)
    if (index !== -1) {
        array.splice(index, 1)
    }
}

function getLocalStorageState() {
    const localState = JSON.parse(localStorage.getItem('state'))
    if (localState === null) {
        return {
            incompleteTodos: [],
            completedTodos: [],
        }
    } else {
        return localState
    }
}

function updateLocalStorageState() {
    localStorage.setItem('state', JSON.stringify(state))
}
