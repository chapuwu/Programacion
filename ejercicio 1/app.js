const number1 = prompt('escribe tu numero perra')

const number2 = prompt('escribe tu otro numero perra')

const intNumber1 = parseInt(number1)

const intNumber2 = parseInt(number2)
if (intNumber1 == intNumber2) {
    alert('los numeros son iguales')
} else {
    let mayor, menor

    if (intNumber1 > intNumber2) {
        mayor = intNumber1
        menor = intNumber2
    } else {
        mayor = intNumber2
        menor = intNumber1
    }
    alert(`el mayor es ${mayor}, el menor es ${menor}, no son iguales`)
}
