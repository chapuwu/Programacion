let numeros = []

for (let i = 1; i <= 6; i++) {
    let number = prompt('introduce un numero')
    numeros.push(number)
}

console.log(numeros.length)
document.body.innerHTML = numeros.length
