while (true) {
    let number = parseInt(prompt('un numero'))
    if (isNaN(number)) {
        alert('no es valido')
    } else if (number % 2 === 0) {
        alert('es par')
        break
    } else {
        alert('es impar')
        break
    }
}
