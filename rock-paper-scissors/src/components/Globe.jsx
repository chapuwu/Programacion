import globo from '../img/globo.png'
import piedra from '../img/rock.png'
import papel from '../img/paper.png'
import tijera from '../img/scissor.png'

export default function Globe({ option, bot }) {
    let src = null

    if (option === 'piedra') {
        src = piedra
    } else if (option === 'papel') {
        src = papel
    } else if (option === 'tijera') {
        src = tijera
    }

    return (
        <div
            className={`relative h-32 aspect-square mb-3 flex justify-center items-center ${
                bot ? 'rotate-180' : 'rotate-0'
            }`}>
            <img src={option ? globo : null} alt='' className='absolute h-full object-contain top-2' />
            <img src={src} alt='' className={`absolute h-1/2 z-10 object-contain ${bot ? 'rotate-180' : 'rotate-0'}`} />
        </div>
    )
}
