class Promesa {
    constructor(funcion) {
        this.resultado = funcion()
    }

    then(funcion) {
        funcion(this.resultado)
    }
}

function main() {
    new Promesa(() => {
        console.log('haciendo algo')
        console.log('mirando algo')
        console.log('sacando algo')
        return 'tumama'
    }).then((resultado) => {
        console.log(`el resultado es ${resultado}`)
    })
}

main()
