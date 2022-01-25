let number1 = parseInt(prompt('escriba un numero'))

let number2 = parseInt(prompt('escriba otro numero'))

while (true) {
    if (isNaN(number1) || isNaN(number2)) {
        console.log('los valores son letras')
        break
    } else if (number1 <= 0 && number2 <= 0) {
        console.log('los valores son menores o iguales a cero')
        break
    } else if (number1 > number2) {
        console.log(number1 + ' es mayor que ' + number2)
        break
    } else if (number1 < number2) {
        console.log(number1 + ' es menor que ' + number2)
        break
    } else {
        console.log('son iguales')
        break
    }
}
