const imagen = document.querySelector('.imagen img')

const link = document.querySelector('.imagen')

const nombre = document.querySelector('.imagen p')

const perfiles = [
    {
        nombre: 'mis',
        link: 'https://steamcommunity.com/id/misdocumeno/',
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/5d/5dbbec687ca4c034316af27dfd1366c95e02669b_full.jpg',
    },
    {
        nombre: 'chapi',
        link: 'https://steamcommunity.com/id/chapefresh/',
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/89/894c52eee0283a7684217dc4d19093fe1822f47a_full.jpg',
    },
    {
        nombre: 'fachu',
        link: 'https://steamcommunity.com/id/sailwith',
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/af/af694c6c8e62162898474ce7732c39804cccb1bd_full.jpg',
    },
    {
        nombre: 'master',
        link: 'https://steamcommunity.com/id/MasterAngeI',
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/e6/e643c812feece27c17ad274ee113b3c2efb3d202_full.jpg',
    },
    {
        nombre: 'max',
        link: 'https://steamcommunity.com/id/582838282992',
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/2b/2bef4530ddcf4a3981db14447c861d1855569f23_full.jpg',
    },
    {
        nombre: 'cande',
        link: 'https://steamcommunity.com/profiles/76561198333908471',
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f8/f8663908e707055a0275060cf4e37c2e9793f738_full.jpg',
    },
    {
        nombre: 'agos',
        link: 'https://steamcommunity.com/id/Steakchelle',
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/98/9836c8e5b2206d3dd2efd4fcb34e68d71a16ab34_full.jpg',
    },
]

let current = 3

function setUser() {
    imagen.setAttribute('src', perfiles[current].avatar)
    link.setAttribute('href', perfiles[current].link)
    nombre.innerHTML = perfiles[current].nombre
}

setUser()

// Flechas:

const flechaIzq = document.querySelector('.izqui')

const flechaDerech = document.querySelector('.derech')

flechaIzq.addEventListener('click', () => {
    current -= 1
    if (current < 0) {
        current = perfiles.length - 1
    }
    setUser()
})

flechaDerech.addEventListener('click', () => {
    current += 1
    if (current >= perfiles.length) {
        current = 0
    }
    setUser()
})
