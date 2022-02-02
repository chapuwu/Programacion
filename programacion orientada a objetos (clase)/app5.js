class Virus {
    constructor(nombre, forma, sintomas) {
        this.nombre = nombre
        this.forma = forma
        this.sintomas = sintomas
    }

    descubrirVirus() {
        console.log(`nombre: ${this.nombre} \n forma: ${this.forma} sintomas: ${this.sintomas}`)
    }
}

const vairus = new Virus(`govir19`, `una bola gigante`, `te moris si tenes defensas bajas`)
const vairus2 = new Virus(`ebola`, `un gusanardo`, `te moris aumque tengas a thor al lado`)
const vairus3 = new Virus(`peronismo`, `son personas boludas`, `pobreza, hambre, mucha polenta y de todo`)

vairus.descubrirVirus()
vairus2.descubrirVirus()
vairus3.descubrirVirus()
