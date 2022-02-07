class Imagen {
    constructor(foto, clase) {
        this.foto = foto
        this.clase = clase
    }

    ponerImagen() {
        const imagen = document.createElement('img')
        imagen.setAttribute('src', this.foto)
        imagen.setAttribute('class', this.clase)
        document.body.appendChild(imagen)
    }
}

const imagen = new Imagen('san martin enojado.jpg', 'imagen-xd')
const imagen2 = new Imagen(
    `https://lh3.googleusercontent.com/
2hDpuTi-0AMKvoZJGd-yKWvK4tKd
Qr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqir
grIPWnCKMvElaYgI-HiVvXc=w600`,
    'imagen-xd',
)
const imagen3 = new Imagen(
    `https://img-9gag-fun.9cache.com/
photo/a419GbQ_460s.jpg`,
    `imagem-xd`,
)
const imagen4 = new Imagen(
    `https://ruinmyweek.com/wp-content/uploads/2018/12/19-
pictures-
literally-no-one-on-the-internet-should-be-allowed-to-see-6.jpg`,
    `imagen-xd`,
)

const imagen5 = new Imagen(`memexd.jpg`, `imagen-xd`)

imagen.ponerImagen()
imagen2.ponerImagen()
imagen3.ponerImagen()
imagen4.ponerImagen()
imagen5.ponerImagen()
