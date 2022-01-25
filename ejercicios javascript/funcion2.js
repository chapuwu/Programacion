function saludar(name) {
    document.body.innerHTML = `<h1>HOLA ${name.toUpperCase()}</h1>`
}

let nombre = prompt('dime tu nombre amiguito')

saludar(nombre)
