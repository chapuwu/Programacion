let number1 = parseInt(prompt('pone un numero'))

let number2 = parseInt(prompt('pone un numero'))

while (number1 <= number2) {
    if (number1 % 2 !== 0) {
        console.log(number1)
    }
    number1++
}
