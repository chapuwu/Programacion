class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} anios, un gusto`)
    }
}

function main() {
    const presentacion = new Persona('Gilberto', 15)
    presentacion.saludar()
    console.log(`un gusto ${}`)
}

main()
