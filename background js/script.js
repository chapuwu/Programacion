const numero = document.querySelector('.number')

const disminuir = document.querySelector('.disminuir')

const reset = document.querySelector('.botonclick')

const aumentar = document.querySelector('.aumentar')

let numerito = 0

disminuir.addEventListener('click', () => {
    numerito--
    numero.textContent = numerito
})

reset.addEventListener('click', () => {
    numerito = 0
    numero.textContent = numerito
})

aumentar.addEventListener('click', () => {
    numerito++
    numero.textContent = numerito
})

numero.textContent = numerito
