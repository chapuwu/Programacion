const texto = document.querySelector('.texto')

const enviar = document.querySelector('.enviar')

const ul = document.querySelector('.add-list > ul')

const todos = restaurarDesdeAlmacenamientoLocal()

const ulComplete = document.querySelector('.texto-complete > ul')

const todoComplete = []

enviar.addEventListener('click', () => {
    agregarLi(texto.value)
    todos.push(texto.value)
    texto.value = '' // vaciar el campo para escribir al mandar un texto
    actualizarAlmacenamientoLocal()
})

// funcion que agrega texto al DOM, con iconos (finalizado, editar y/o eliminar)

function agregarLi(texto) {
    const li = document.createElement('li')

    // creando iconos

    // icono finalizado

    const finalizado = document.createElement('i')
    finalizado.innerText = 'done' // agregando done adentro del tag <i>
    finalizado.classList.add('material-icons') // agregando una clase en el tag <i>
    li.appendChild(finalizado) // agregando un texto con icono adentro del tag <li>

    // icono eliminar

    const eliminar = document.createElement('i')
    eliminar.innerText = 'close'
    eliminar.classList.add('material-icons')
    li.appendChild(eliminar)

    // icono editar

    const editar = document.createElement('i')
    editar.innerText = 'edit'
    editar.classList.add('material-icons')
    li.appendChild(editar)

    // span para que los iconos no esten separados

    const juntador = document.createElement('span')
    juntador.classList.add('iconos')

    // agregando iconos adentro de span

    juntador.appendChild(finalizado)
    juntador.appendChild(eliminar)
    juntador.appendChild(editar)

    // agregando texto con iconos

    li.innerText = texto // lo que escriba en la linea 8 se va a poner aca
    li.appendChild(juntador) // esto agrega los span adentro de <li>

    ul.appendChild(li) // agregando texto con iconos para mostrarlos en el DOM

    // darle funciones a los iconos

    finalizado.addEventListener('click', () => tareaCompleta(texto, li))
    editar.addEventListener('click', () => editarTarea(texto, li))
    eliminar.addEventListener('click', () => eliminarTarea(texto, li))
}

// funcion para eliminar tareas del DOM

function eliminarTarea(todo, li) {
    li.remove() // eliminar una tarea del DOM
    const index = todos.indexOf(todo)
    if (index !== -1) {
        todos.splice(index, 1)
        actualizarAlmacenamientoLocal()
    }
}

// editar tarea

function editarTarea(texto, iconos) {
    const editando = prompt('editar: ', texto) // todo lo que se introduzca en prompt se guarda en texto
    iconos.childNodes[0].textContent = editando // childNodes mantiene los iconos en el DOM al editar
    const index = todos.indexOf(texto)
    if (index !== -1) {
        todos[index] = editando
    }
    actualizarAlmacenamientoLocal()
}

// tarea completada

function tareaCompleta(texto, li) {
    agregarCompletado(texto, li)
    guardarTareaComplete()
}
function actualizarAlmacenamientoLocal() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function restaurarDesdeAlmacenamientoLocal() {
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    if (localTodos === null) {
        return []
    } else {
        for (let i = 0; i < localTodos.length; i++) {
            agregarLi(localTodos[i])
        }
        return localTodos
    }
}

function guardarTareaComplete() {
    localStorage.setItem('saveTodo', JSON.stringify(todoComplete))
}

function agregarCompletado(texto, li) {
    const liComplete = document.createElement('li')
    liComplete.innerText = texto
    ulComplete.appendChild(liComplete)
    li.remove()
    todoComplete.push(texto)
    const index = todos.indexOf(texto)
    if (index !== -1) {
        todos.splice(index, 1)
        actualizarAlmacenamientoLocal()
    }
}

function guardar2Arrays() {
    localStorage.setItem('probando', JSON.stringify(todoComplete))
    localStorage.setItem('probando2', JSON.stringify(todos))
}
