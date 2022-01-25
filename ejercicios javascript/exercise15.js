let numeros = []

for (let i = 1; i <= 6; i++) {
    let number = prompt('pone un numero')
    numeros.push(number)
}

let buscar = prompt('que queres buscar')

let found = numeros.find((elemento) => {
    if (elemento === buscar) {
        return true
    } else {
        return false
    }
})
if (found === undefined) {
    alert('no se encontro')
} else {
    alert('si se encontro')
}
