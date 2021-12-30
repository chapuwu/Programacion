let boton = document.querySelector('.boton')

boton.addEventListener('click', miClick)

function miClick() {
    let parrafo = document.querySelector('.parrafo')
    parrafo.innerHTML = 'OMG HICISTE CLICK :SCREAM:'
}
