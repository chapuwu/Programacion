let number = parseInt(prompt('pone un numero'))

let divisor = number - 1

while (divisor > 1) {
    if (number % divisor === 0) {
        console.log(`${divisor} es un divisor`)
    }
    divisor--
}
