const input: HTMLInputElement | null = document.querySelector('.texto')
const botonEnviar = document.querySelector('.botonenviar')
const botonBorrar = document.querySelector('.eliminar')
const botonFinish = document.querySelector('.finalizado')
const botonEditar = document.querySelector('.editar')
const listaTodo = document.querySelector('.list-todo > ul')
const listaTodoCompleta = document.querySelector('.todo-complete > ul')

let selectedLi: HTMLLIElement | undefined = undefined

input!.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        agregarTarea(input!.value)
        input!.value = ''
    }
})

botonEnviar!.addEventListener('click', () => {
    agregarTarea(input!.value)
    input!.value = ''
})

botonBorrar!.addEventListener('click', () => {
    if (selectedLi) {
        const index = estado.todoIncompleto.indexOf(selectedLi.innerHTML)
        estado.todoIncompleto.splice(index, 1)
        selectedLi = undefined
        render()
    }
})

botonEditar!.addEventListener('click', () => {
    if (selectedLi) {
        const texto = prompt('editar tarea: ')
        if (texto !== null) {
            const index = estado.todoIncompleto.indexOf(selectedLi.innerHTML)
            estado.todoIncompleto[index] = texto
            selectedLi.innerHTML = texto
            render()
        }
    }
})

botonFinish!.addEventListener('click', () => {
    if (selectedLi) {
        // agregar una nueva tarea a la lista de completados
        estado.todoCompleto.push(selectedLi.innerText)
        // quitarla de la lista de incompletos
        const index = estado.todoIncompleto.indexOf(selectedLi.innerText)
        estado.todoIncompleto.splice(index, 1)
        // volver a renderizar
        render()
        // quitar la referencia al li
        selectedLi = undefined
    }
})

interface State {
    todoIncompleto: string[]
    todoCompleto: string[]
}

const estado: State = {
    todoIncompleto: [],
    todoCompleto: [],
}

function agregarTarea(tarea: string) {
    estado.todoIncompleto.push(tarea)
    render()
}

function render() {
    const selectedLiText = selectedLi?.innerText

    listaTodo!.innerHTML = ''
    listaTodoCompleta!.innerHTML = ''

    estado.todoIncompleto.forEach((tarea) => {
        // ACA SE CREA EL LI
        const li = crearElementoLi(tarea)
        listaTodo!.appendChild(li)

        // PINTARLO SI ES EL LI SELECCIONADO, y poner el nuevo li en la variable global selectedLi
        if (selectedLiText === tarea) {
            li.style.backgroundColor = '#fff5'
            selectedLi = li
        }

        // ACA SE SELECCIONA EL LI AL HACER CLICK
        li.addEventListener('click', () => {
            // si ya habia otro li seleccionado, sacarle el color
            if (selectedLi !== undefined) {
                selectedLi.style.backgroundColor = ''
            }

            // cambiar al nuevo li
            selectedLi = li
            // y ponerle color
            li.style.backgroundColor = '#fff5'
        })
    })

    estado.todoCompleto.forEach((tarea) => {
        const li = crearElementoLi(tarea)
        listaTodoCompleta!.appendChild(li)
    })
}

function crearElementoLi(tarea: string) {
    const li = document.createElement('li')
    li.innerHTML = tarea
    return li
}
