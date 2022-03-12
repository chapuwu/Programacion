const incompleteUl = document.querySelector('#uncompleted')
const completeUl = document.querySelector('#completed')

const input = document.querySelector('#todo-input')
const add = document.querySelector('#todo-add')

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addNewTodo(input.value)
        input.value = ''
        e.preventDefault()
    }
})

add.addEventListener('click', () => {
    addNewTodo(input.value)
    input.value = ''
})

const state = {
    todoIncomplete: [],
    todoCompleted: [],
}

function render() {
    // reset both lists
    incompleteUl.innerHTML = ''
    completeUl.innerHTML = ''

    // fill those lists
    state.todoIncomplete.forEach((todo) => {
        const li = createLiElement(todo)
        addButtons(li)
        incompleteUl.appendChild(li)
    })

    state.todoCompleted.forEach((todo) => {
        const li = createLiElement(todo)
        completeUl.appendChild(li)
    })
}

function createLiElement(text) {
    const li = document.createElement('li')
    li.textContent = text
    return li
}

function addButtons(li) {
    const deleteButton = document.createElement('button')
    deleteButton.innerText = '❌'
    deleteButton.addEventListener('click', () => removeTodo(li.childNodes[0].textContent))

    const doneButton = document.createElement('button')
    doneButton.innerText = '✔️'
    doneButton.addEventListener('click', () => doneTodo(li.childNodes[0].textContent))

    li.appendChild(deleteButton)
    li.appendChild(doneButton)
}

function addNewTodo(todo) {
    state.todoIncomplete.push(todo)
    render()
}

function removeTodo(todo) {
    removeFromArray(state.todoIncomplete, todo)
    render()
}

function doneTodo(todo) {
    removeFromArray(state.todoIncomplete, todo)
    state.todoCompleted.push(todo)
    render()
}

function removeFromArray(array, element) {
    const index = array.indexOf(element)
    if (index !== -1) {
        array.splice(index, 1)
    }
}
