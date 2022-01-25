function getNumber() {
    while (true) {
        const number = parseInt(prompt('un numero'))
        if (isNaN(number)) {
            alert('no es numero')
            continue
        }
        return number
    }
}

function print(msg) {
    console.log(msg)
    alert(msg)
    document.body.innerHTML = msgx.replace(/\n/g, '<br>')
}

function calculate(number1, number2) {
    let mensaje = `
    ${number1} + ${number2} = ${number1 + number2}
    ${number1} - ${number2} = ${number1 - number2}
    ${number1} * ${number2} = ${number1 * number2}
    ${number1} / ${number2} = ${number1 / number2}`
    return mensaje
}

function main() {
    const number1 = getNumber()
    const number2 = getNumber()
    const texto = calculate(number1, number2)
    print(texto)
}

main()
