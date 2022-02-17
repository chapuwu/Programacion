const fs = require('fs')

fs.writeFile('./texto.txt', 'hola mundo', function (err) {
    if (err) {
        console.log('hay un error')
    } else {
        console.log('se creo el archivo')
    }
})

