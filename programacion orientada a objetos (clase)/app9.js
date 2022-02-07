class Imagen {
    constructor(imagen, clase) {
        this.imagen = imagen
        this.clase = clase
    }

    agregarImagen() {
        const selector = document.querySelector('.boton')
        selector.addEventListener('click', () => {
            const imagen = document.createElement('img')
            imagen.setAttribute('src', this.imagen)
            imagen.setAttribute('class', this.clase)
            document.body.appendChild(imagen)
        })
    }
}

const agregarSanMartin = new Imagen('san martin enojado.jpg', 'imagen-xd')

agregarSanMartin.agregarImagen()
