const cuadrado = document.querySelector('.cuadrado')

let amarillo

function clickColor() {
    if (amarillo) {
        cuadrado.style.backgroundColor = 'white'
        amarillo = false
    } else {
        cuadrado.style.backgroundColor = 'yellow'
        amarillo = true
    }
}

cuadrado.addEventListener('click', clickColor)
