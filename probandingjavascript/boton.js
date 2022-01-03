// https://youtu.be/7BIrwFbIvho?list=PLRM7PpbqqStLPpUW5zQqR4k2JCs_lqFa5

// boton 1
const boton1 = document.querySelector('#boton1')

function boton1Click() {
    const div = document.querySelector('.juan')
    div.innerHTML = 'Hola Mundo'
}

boton1.addEventListener('click', boton1Click)

// boton 2
const boton2 = document.querySelector('#boton2')

function boton2Click() {
    const div = document.querySelector('.juan')
    div.innerHTML = '<img src="javiespert.jpg" alt="javiespert" height="350px" />'
}

boton2.addEventListener('click', boton2Click)

// boton 3

const boton3 = document.querySelector('#boton3')

function boton3Click() {
    const div = document.querySelector('.juan')
    div.innerHTML += '<button class="boton">boton</button>'
}

boton3.addEventListener('click', boton3Click)

// boton 4

const boton4 = document.querySelector('#boton4')

function boton4Click() {
    const div = document.querySelector('.juan')
    div.innerHTML = ''
}

boton4.addEventListener('click', boton4Click)
