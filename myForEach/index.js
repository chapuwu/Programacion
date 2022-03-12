class MyArray {
    constructor(array) {
        // create an internal array
        if (array !== undefined) {
            this.array = array
        } else {
            this.array = []
        }
    }

    push(element) {
        this.array.push(element)
    }

    forEach(funcion) {
        for (let i = 0; i < this.array.length; i++) {
            funcion(this.array[i])
        }
    }
}

function main() {
    const myArrayGod = new MyArray()

    myArrayGod.push('hola')
    myArrayGod.push('chau')
    myArrayGod.push(123)

    myArrayGod.forEach((element) => {
        console.log(`element: ${element}`)
    })
}

main()
