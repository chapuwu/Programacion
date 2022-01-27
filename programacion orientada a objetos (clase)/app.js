// clases

class Perro {
    constructor(nombre, raza) {
        this.nombre = nombre
        this.raza = raza
    }

    ladrar() {
        console.log(`Soy ${this.nombre} y estoy ladrando GUAU GUAU`)
    }

    decirRaza() {
        console.log(`mi raza es ${this.raza}`)
    }
}

function main() {
    const perro1 = new Perro('Pepe', 'Salchicha')
    perro1.ladrar()
    perro1.decirRaza()

    const perro2 = new Perro('JoseMaria', 'Policia')
    perro2.ladrar()
    perro2.decirRaza()
}

main()
