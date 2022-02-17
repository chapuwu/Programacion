const texto = document.querySelector('.texto')

const enviar = document.querySelector('.enviar')

const ul = document.querySelector('.add-list > ul')

enviar.addEventListener('click', () => {
    agregarLi(texto.value)
    texto.value = '' // vaciar el campo para escribir al mandar un texto
})

// funcion que agrega texto al DOM, con iconos (finalizado, editar y/o eliminar)

function agregarLi(texto) {
    const crearLi = document.createElement('li')

    // creando iconos

    // icono finalizado

    const finalizado = document.createElement('i')
    finalizado.innerText = 'done' // agregando done adentro del tag <i>
    finalizado.classList.add('material-icons') // agregando una clase en el tag <i>
    crearLi.appendChild(finalizado) // agregando un texto con icono adentro del tag <li>

    // icono eliminar

    const eliminar = document.createElement('i')
    eliminar.innerText = 'close'
    eliminar.classList.add('material-icons')
    crearLi.appendChild(eliminar)

    // icono editar

    const editar = document.createElement('i')
    editar.innerText = 'edit'
    editar.classList.add('material-icons')
    crearLi.appendChild(editar)

    // span para que los iconos no esten separados

    const juntador = document.createElement('span')
    juntador.classList.add('iconos')

    // agregando iconos adentro de span

    juntador.appendChild(finalizado)
    juntador.appendChild(eliminar)
    juntador.appendChild(editar)

    // agregando texto con iconos

    crearLi.innerText = texto // lo que escriba en la linea 8 se va a poner aca
    crearLi.appendChild(juntador) // esto agrega los span adentro de <li>

    ul.appendChild(crearLi) // agregando texto con iconos para mostrarlos en el DOM

    // darle a los iconos funciones

    finalizado.addEventListener('click', () => tareaCompleta(crearLi))
    editar.addEventListener('click', () => editarTarea(crearLi))
    eliminar.addEventListener('click', () => eliminarTarea(crearLi))
}

// funcion para eliminar tareas del DOM

function eliminarTarea(crearLi) {
    crearLi.remove()
}

// editar tarea

function editarTarea(texto) {
    const editando = prompt('editar: ', texto)
    texto.textContent = editando
}
