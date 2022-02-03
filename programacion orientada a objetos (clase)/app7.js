class Imagen {
    constructor(foto, clase) {
        this.foto = foto
        this.clase = clase
    }

    ponerImagen() {
        const imagen = document.createElement('img')
        imagen.setAttribute('src', this.foto)
        imagen.setAttribute('class', this.clase)
        document.body.appendChild(imagen)
    }
}

const imagen = new Imagen('san martin enojado.jpg', 'imagen-xd')

imagen.ponerImagen()
