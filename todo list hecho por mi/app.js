const texto = document.querySelector('.texto')

const enviar = document.querySelector('.enviar')

const ul = document.querySelector('.add-list > ul')

enviar.addEventListener('click', () => {
    agregarLi()
    crearIconos()
})

// funcion que crea un li y muestra a DOM

function agregarLi() {
    const crearLi = document.createElement('li')
    crearLi.innerText = texto.value
    ul.appendChild(crearLi)

    // creando iconos

    const check = document.createElement('i')
    check.innerText = 'done'
    check.classList.add('material.icons')
    ul.appendChild(crearLi)
}
