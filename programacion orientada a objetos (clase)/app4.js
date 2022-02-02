class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} anios, un gusto`)
        console.log(`un gusto ${this.nombre}`)
    }
}

function main() {
    const presentacion = new Persona('Emmanuel', 22)
    presentacion.saludar()
}

main()
