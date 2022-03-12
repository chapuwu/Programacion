const randomclick = document.querySelector('.botonclick')

const botonIzquierdo = document.querySelector('.izquierda')

const botonDerecho = document.querySelector('.derecha')

const imagen = document.querySelector('.imagen')

const nombre = document.querySelector('.nombre')

const comentarios = document.querySelector('.comentario')

const comentariosArray = [
    {
        nombre: 'Barbara Palvin',
        comentario: 'atr gato la pagina me gusto es muy anashe quedo goodeto para lo pibis y las pibis',
        imagen: 'download.jpeg',
    },

    {
        nombre: 'Linus Torvalds',
        comentario: 'este chico me llena de orgullo lo que acaba de programar POR DIOS esta persona ocupara mi lugar',
        imagen: '1366_2000.jpg',
    },

    {
        nombre: 'Neymar',
        comentario: 'pelo amor de deus que isso cara boa mano',
        imagen: 'Neymar_PSG.jpg',
    },
    {
        nombre: 'Lionel',
        comentario: 'nanaanan muy cebado el wachin es muy god programando capaz sea bueno en el futbol tambien',
        imagen: 'lionel-messi_267x267.jpg',
    },
]

let comentarioActual = 0

botonIzquierdo.addEventListener('click', () => {
    comentarioActual--
    if (comentarioActual === -1) {
        comentarioActual = comentariosArray.length - 1
    }
    actualizador()
})

botonDerecho.addEventListener('click', () => {
    comentarioActual++
    if (comentarioActual === comentariosArray.length) {
        comentarioActual = 0
    }
    actualizador()
})

function actualizador() {
    imagen.setAttribute('src', comentariosArray[comentarioActual].imagen)
    nombre.innerText = comentariosArray[comentarioActual].nombre
    comentarios.innerText = comentariosArray[comentarioActual].comentario
}

actualizador()
