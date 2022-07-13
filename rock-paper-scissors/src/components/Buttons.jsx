import piedra from '../img/rock.png'
import papel from '../img/paper.png'
import tijera from '../img/scissor.png'

export default function Buttons({ onButtonClick }) {
    return (
        <div className='flex gap-5'>
            <button
                className='bg-red-800 hover:bg-slate-400 rounded-md h-24 aspect-square p-3'
                onClick={() => onButtonClick('piedra')}>
                <img src={piedra} alt='' />
            </button>
            <button
                className='bg-green-800  hover:bg-slate-400 rounded-md h-24 aspect-square p-3'
                onClick={() => onButtonClick('papel')}>
                <img src={papel} alt='' />
            </button>
            <button
                className='bg-blue-800 hover:bg-slate-400 rounded-md h-24 aspect-square p-3'
                onClick={() => onButtonClick('tijera')}>
                <img src={tijera} alt='' />
            </button>
        </div>
    )
}
