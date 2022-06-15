import Botones from './components/Botones'
import logo from './img/unifixlogo.png'
import BarNav from './components/BarNav'
import Welcome from './components/Welcome'

function App() {
    return (
        <div className='h-screen w-auto bg-slate-700'>
            <div className='flex justify-between'>
                <img src={logo} alt='' className='h-16 mt-5 ml-4' />
                <BarNav />
            </div>
            <div className='flex w-full justify-center'>
                <Welcome />
            </div>
        </div>
    )
}

export default App