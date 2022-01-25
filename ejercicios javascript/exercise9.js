while (true) {
    const number1 = parseInt(prompt('un numero'))
    const number2 = parseInt(prompt('un numero'))

    if (isNaN(number1) || isNaN(number2)) {
        alert('uno de los numeros esta mal')
        continue
    }

    let mensaje = `
    ${number1} + ${number2} = ${number1 + number2}
    ${number1} - ${number2} = ${number1 - number2}
    ${number1} * ${number2} = ${number1 * number2}
    ${number1} / ${number2} = ${number1 / number2}`

    console.log(mensaje)
    document.body.innerHTML = mensaje.replace(/\n/g, '<br>')
    alert(mensaje)
    break
}
