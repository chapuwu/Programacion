class BotonImagen {
    constructor(boton, clase, imagen, clase2) {
        this.boton = boton
        this.clase = clase
        this.imagen = imagen
        this.clase2 = clase2
        this.agregarBoton()
    }

    agregarBoton() {
        const boton = document.createElement('button')
        boton.setAttribute('class', this.clase)
        boton.innerHTML = this.boton
        document.body.appendChild(boton)
        boton.addEventListener('click', this.agregarImagen)
    }

    agregarImagen() {
        const imagen = document.createElement('img')
        imagen.setAttribute('src', this.imagen)
        imagen.setAttribute('class', this.clase2)
        document.body.appendChild(imagen)
    }
}

const botonImagen = new BotonImagen('agregar', 'boton-xd', 'san martin enojado.jpg', 'imagen-xd')
