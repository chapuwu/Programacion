const texto = document.querySelector('.texto')

const botonEnviar = document.querySelector('.botonenviar')

const ul = document.querySelector('.tareas-list > ul')

const ulCompleto = document.querySelector('.tareas-completas > ul')

const listaCompleta = []

const lista = []

botonEnviar.addEventListener('click', () => {
    tareasList(texto.value)
    lista.push(texto.value)
    texto.value = ''
    guardarLocalmente()
    guardarTareaLocal()
})

function tareasList(texto) {
    const li = document.createElement('li')
    ul.append(li)

    const p = document.createElement('p')
    li.append(p)
    p.append(texto)

    const eliminar = document.createElement('button')
    eliminar.classList.add('delete')
    eliminar.append('eliminar')
    li.append(eliminar)

    const editar = document.createElement('button')
    editar.classList.add('edit')
    editar.append('editar')
    li.append(editar)

    const terminado = document.createElement('button')
    terminado.classList.add('finish')
    terminado.append('terminado')
    li.append(terminado)

    eliminar.addEventListener('click', () => {
        eliminarTarea(texto, li)
    })

    editar.addEventListener('click', () => {
        editarTarea(texto, li)
    })

    terminado.addEventListener('click', () => {
        tareaCompletada(texto, li)
    })
}

function eliminarTarea(tarea, li) {
    li.remove()
    const index = lista.indexOf(tarea)
    if (index !== -1) {
        lista.splice(index, 1)
    }
}

function editarTarea(tarea, p) {
    const tareaEditada = prompt('introduce un nuevo nombre para la tarea', tarea)
    p.childNodes[0].textContent = tareaEditada
    const editarArray = lista.indexOf(tarea)
    if (editarArray !== -1) {
        lista[editarArray] = tareaEditada
    }
}

function tareaCompletada(texto, li) {
    const liCompleto = document.createElement('li')
    const parrafo = document.createElement('p')
    ulCompleto.appendChild(liCompleto)
    liCompleto.appendChild(parrafo)
    parrafo.append(texto)
    li.remove()
    listaCompleta.push(texto)
}

function guardarLocalmente() {
    localStorage.setItem('tarea', JSON.stringify(lista))
}

function guardarTareaLocal() {
    localStorage.setItem('tarea', JSON.stringify(lista))
}

function restaurarTarea() {
    const tareaGuardada = JSON.parse(localStorage.getItem('tarea'))
}
