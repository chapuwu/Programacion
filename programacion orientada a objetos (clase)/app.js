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

class Arma {
    constructor(modelo, balas, danio) {
        this.modelo = modelo
        this.balas = balas
        this.danio = danio
    }

    disparar() {
        if (this.balas === 0) {
            console.log(`el/la ${this.modelo} no tiene balas`)
        } else {
            this.balas -= 1
            console.log(`${this.modelo} hizo ${this.danio} y le quedan ${this.balas} balas`)
        }
    }
}

function main() {
    const perro1 = new Perro('Pepe', 'Salchicha')
    perro1.ladrar()
    perro1.decirRaza()

    const perro2 = new Perro('JoseMaria', 'Policia')
    perro2.ladrar()
    perro2.decirRaza()

    const ak47 = new Arma('AK-47', 30, 35)
    ak47.disparar()
    const m4a1 = new Arma('M4A1', 30, 30)
    m4a1.disparar()
    const usp = new Arma('USP', 12, 15)
    usp.disparar()
    const p90 = new Arma('P90', 50, 20)
    p90.disparar()
    const deagle = new Arma('Desert Eagle', 7, 37)
    deagle.disparar()
    const negev = new Arma('NEGEV', 100, 23)
    negev.disparar()
    const awp = new Arma('AWP', 10, 105)
    awp.disparar()
}

main()
