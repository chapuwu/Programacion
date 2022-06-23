import Botones from './components/Botones'
import logo from './img/unifixlogo.png'
import BarNav from './components/BarNav'
import Welcome from './components/Welcome'

function App() {
    return (
        <div className='h-screen w-auto bg-slate-700'>
            <div className='flex justify-between'>
                <img src={logo} alt='' className='h-16 mt-3 ml-4' />
                <BarNav />
            </div>
            <div className='flex w-full justify-center'>
                <Welcome />
            </div>
            <input type='text' placeholder='esto es una prueba' onChange={(event) => console.log(event.target.value)} />
        </div>
    )
}

export default App
