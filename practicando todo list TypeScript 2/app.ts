const input: HTMLInputElement = document.querySelector('.input')!
const botonEnviar = document.querySelector('.botonenviar')
const listaTodo = document.querySelector('.todo-list')

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        agregarTodo(input.value)
        input.value = ''
    }
})

botonEnviar?.addEventListener('click', () => {
    agregarTodo(input.value)
    input.value = ''
})

function agregarTodo(todo: string) {
    estado.todoIncompleto.push(todo)
    render()
}

function render() {
    listaTodo!.innerHTML = ''

    estado.todoIncompleto.forEach((todo) => {
        const li = crearLi(todo)
        listaTodo!.appendChild(li)
    })
}

function crearLi(todo: string) {
    const li = document.createElement('li')
    li.innerText = todo
    return li
}

interface State {
    todoIncompleto: string[]
}

const estado: State = {
    todoIncompleto: [],
}

// esto se hizo lo mas rapido posible
