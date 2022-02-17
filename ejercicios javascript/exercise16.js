let boton = document.querySelector('.form')

boton.addEventListener('submit', (event) => {
    let nombre = document.querySelector('.nombre').value
    let apellido = document.querySelector('.apellido').value
    let edad = parseInt(document.querySelector('.edad').value)
    if (nombre.length === 0) {
        alert('en nombre no hay nada')
    } else if (apellido.length === 0) {
        alert('en apellido no hay nada')
    } else if (isNaN(edad) || edad < 1) {
        alert('edad invalida')
    } else {
        alert(`el nombre es: ${nombre}\nel apellido es: ${apellido}\nla edad es: ${edad}`)
    }
    event.preventDefault()
})
z