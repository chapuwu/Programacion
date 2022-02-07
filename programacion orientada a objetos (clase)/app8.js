class Boton {
    constructor(clase, boton) {
        this.clase = clase
        this.boton = boton
    }

    ponerBoton() {
        const boton = document.createElement('button')
        boton.setAttribute('class', this.clase)
        boton.innerHTML = this.boton
        document.body.appendChild(boton)
    }
}

const boton = new Boton('boton-xd', 'probandotexto')

boton.ponerBoton()
