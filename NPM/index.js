const cowwsay = require('cowsay')

const laVaca = cowwsay.say({
    text: 'hola mundo',
    e: '👁️👁️',
    T: '👅',
})

const laVaca2 = cowwsay.think({
    text: 'probando',
})

console.log(laVaca2)
console.log(laVaca)
