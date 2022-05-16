import { useState } from 'react'
import logo from './imglogo/pijapug.png'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='bg-zinc-700 w-screen h-screen grid grid-cols-2 grid-rows-2   gap-px'>
            <div className='bg-black border-gray-400 h-14 w-11/12 ml-14  flex items-center'>
                <img src={logo} alt='' className='h-6 ml-5' />
                <div className='ml-2'>
                    <a href='#' className='ml-7 text-yellow-600'>
                        Server
                    </a>
                    <a href='#' className='ml-7 text-yellow-600'>
                        FAQ
                    </a>
                    <a href='#' className='ml-7 text-yellow-600'>
                        Ratings / Report
                    </a>
                    <a href='#' className='ml-7 text-yellow-600'>
                        Sourcebans
                    </a>
                    <a href='#' className='ml-7 text-yellow-600'>
                        Admins
                    </a>
                </div>
            </div>
            <div className='bg-black h-56 w-3/5 flex justify-center items-center flex-col'>
                <h1 className='text-white'>What is CEDAPug?</h1>
                <p className='text-white flex '>
                    CEDAPug is a <p className='text-yellow-300 font-bold ml-1'>pick-up game</p>
                    website for
                    <a href='#' className='ml-1 text-blue-500'>
                        Left 4 Dead 2
                    </a>
                </p>
            </div>
            <div className='bg-red-600 h-10 w-10'>3</div>
            <div className='bg-green-600 h-10 w-10'>4</div>
            <div className='bg-emerald-300 h-10 w-10'>5</div>
            <div className='bg-cyan-50 h-10 w-10'>6</div>
            <div className='bg-cyan-50 h-10 w-10'>7</div>
            <div className='bg-cyan-50 h-10 w-10'>8</div>
        </div>
    )
}

export default App
