class Mouse {
    constructor(modelo, marca, color) {
        this.modelo = modelo
        this.marca = marca
        this.color = color
    }

    usar() {
        console.log(`modelo: ${this.modelo} \n marca: ${this.marca} \n color: ${this.color}`)
    }
}

const mouse = new Mouse('g203', 'logitech', 'rojo')
mouse.usar()
