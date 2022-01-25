let numeros = []

function mostrarArray() {
    console.log(numeros)
    document.body.innerHTML = numeros
}

for (let i = 1; i <= 6; i++) {
    let number = prompt('introduce un numero')
    numeros.push(number)
}
mostrarArray()
