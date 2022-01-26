let nombres = JSON.parse(localStorage.getItem('nombres'))

function addLi(nombre) {
    const li = document.createElement('li')
    li.innerHTML = nombre
    document.querySelector('ul').appendChild(li)
}

if (nombres === null) {
    nombres = []
}
for (let i = 0; i < nombres.length; i++) {
    addLi(nombres[i])
}

let boton = document.querySelector('.form')

boton.addEventListener('submit', (event) => {
    let nom = document.querySelector('.nombre').value
    addLi(nom)
    nombres.push(nom)
    localStorage.setItem('nombres', JSON.stringify(nombres))
    event.preventDefault()
})
