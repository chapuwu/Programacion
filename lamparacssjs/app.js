const switchh = document.querySelector('.switch')
const lampara = document.querySelector('.lampara')

let encendido = false

function clickSwitch() {
    if (encendido) {
        switchh.classList.remove('switch-on')
        switchh.classList.add('switch-off')
        lampara.classList.remove('lampara-on')
        lampara.classList.add('lampara-off')
        encendido = false
    } else {
        switchh.classList.remove('switch-off')
        switchh.classList.add('switch-on')
        lampara.classList.remove('lampara-off')
        lampara.classList.add('lampara-on')
        encendido = true
    }
}
switchh.addEventListener('click', clickSwitch)
