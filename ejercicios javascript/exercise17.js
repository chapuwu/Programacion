let boton = document.querySelector('.form')

boton.addEventListener('submit', (event) => {
    let nom = document.querySelector('.nombre').value
    let apelli = document.querySelector('.apellido').value
    let years = parseInt(document.querySelector('.edad').value)
    localStorage.setItem('Nombre', nom)
    localStorage.setItem('Apellido', apelli)
    localStorage.setItem('Edad', years)
    event.preventDefault()
})
