const texto = document.querySelector('.texto')

const enviar = document.querySelector('.enviar')

const ul = document.querySelector('.add-list > ul')

enviar.addEventListener('click', () => {
    agregarLi(texto.value)
    texto.value = '' // vaciar el campo para escribir al mandar un texto
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

    finalizado.addEventListener('click', () => tareaCompleta(texto, juntador))
    editar.addEventListener('click', () => editarTarea(texto, li))
    eliminar.addEventListener('click', () => eliminarTarea(li))
}

// funcion para eliminar tareas del DOM

function eliminarTarea(li) {
    li.remove() // eliminar una tarea del DOM
}

// editar tarea

function editarTarea(texto, iconos) {
    const editando = prompt('editar: ', texto) // todo lo que se introduzca en prompt se guarda en texto
    iconos.childNodes[0].textContent = editando // childNodes mantiene los iconos en el DOM al editar
}

localStorage.setItem('guardarDatos', texto.value)

const obtenerDatos = localStorage.getItem('guardarDatos')

obtenerDatos.innerText = 'guardarDatos'
