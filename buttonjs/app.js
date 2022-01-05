// boton 3

const boton1 = document.querySelector('#boton1')

function clickBoton1() {
    const div = document.querySelector('.text-photo-buttons')
    div.innerHTML = 'Mis PUTO'
}

boton1.addEventListener('click', clickBoton1)

// boton 1

const boton2 = document.querySelector('#boton2')

function clickBoton2() {
    const div = document.querySelector('.text-photo-buttons')
    div.innerHTML = `<img src="emote545.png" alt="linussextips" />`
}

boton2.addEventListener('click', clickBoton2)

// boton 4

const boton3 = document.querySelector('#boton3')

function botonClick3() {
    const div = document.querySelector('.text-photo-buttons')
    div.innerHTML += `<button>boton</button>`
}

boton3.addEventListener('click', botonClick3)

// boton 2

const boton4 = document.querySelector('#boton4')

function botonClick4() {
    const div = document.querySelector('.text-photo-buttons')
    div.innerHTML = ''
}
boton4.addEventListener('click', botonClick4)

//boton 8

const boton5 = document.querySelector('#boton5')

function botonClick5() {
    const div = document.querySelector('.text-photo-buttons')
    div.innerHTML = `<iframe
    width="736"
    height="414"
    src="https://www.youtube.com/embed/ZcSyzpNWTnk"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer;
autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture"
    allowfullscreen
></iframe>`
}

boton5.addEventListener('click', botonClick5)
