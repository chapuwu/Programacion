let suma = 0
let divisor = 0
while (true) {
    let number = parseInt(prompt('pone un numero'))
    if (number < 0) {
        alert(`la suma es ${suma}, y la media es ${suma / divisor}`)
        break
    } else {
        suma += number
        divisor++
    }
}
