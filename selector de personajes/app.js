const image = document.querySelector('.imagen img')

const name = document.querySelector('.imagen p')

const characters = [
    {
        image: 'ellis.jpg',
        name: 'Ellis',
    },
    {
        image: 'nick.png',
        name: 'Nick',
    },
    {
        image: 'coach.jpg',
        name: 'Coach',
    },
    {
        image: 'rochelle.png',
        name: 'Rochelle',
    },
]
let elegidor = 2

function setCharacter() {
    image.setAttribute('src', characters[elegidor].image)
    name.innerHTML = characters[elegidor].name
}

setCharacter()

const flechaIzq = document.querySelector('.left')

const flechaDerech = document.querySelector('.right')

flechaIzq.addEventListener('click', () => {
    elegidor -= 1
    if (elegidor < 0) {
        elegidor = characters.length - 1
    }
    setCharacter()
})

flechaDerech.addEventListener('click', () => {
    elegidor += 1
    if (elegidor >= characters.length) {
        elegidor = 0
    }
    setCharacter()
})
