function soyUnaPromesaXd() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`TERMINE XD`)
        })
    })
}

console.log("creando la promesks :'C")

soyUnaPromesaXd().then((resultado) => {
    console.log(`el resultado es ${resultado}`)
})
