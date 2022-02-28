const texto = document.querySelector('.texto')

const botonEnviar = document.querySelector('.botonenviar')

const ul = document.querySelector('.tareas-list > ul')

const lista = []

botonEnviar.addEventListener('click', () => {
    tareasList(texto.value)
    lista.push(texto.value)
    texto.value = ''
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
}

function eliminarTarea(tarea, li) {
    li.remove()
}
