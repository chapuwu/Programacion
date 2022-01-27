let nombres = JSON.parse(localStorage.getItem('nombres'))


function addLi(nombre) {
    const li = document.createElement('li')
    li.append(nombre)
    const boton = document.createElement('button')
    boton.append('🗑️')
    boton.addEventListener('click', () => {
        li.remove()
        nombres.splice(nombres.indexOf(nombre), 1)
        localStorage.setItem('nombres', JSON.stringify(nombres))
    })
    li.appendChild(boton)
    document.querySelector('ul').appendChild(li)
}


if (nombres === null) {
    nombres = []
}
for (let i = 0; i < nombres.length; i++) {
    addLi(nombres[i])
}

let form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
    let nom = document.querySelector('.nombre').value
    addLi(nom)
    nombres.push(nom)
    localStorage.setItem('nombres', JSON.stringify(nombres))
    document.querySelector('.nombre').value = ''
    event.preventDefault()
})
