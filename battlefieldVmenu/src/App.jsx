import { useState, useEffect } from 'react'
import MenuSelect from './components/MenuSelect'
import SideMenu from './components/SideMenu'
import OptionMenu from './components/OptionMenu'
import btvfondo from './public/btvbackground.mp4'

function App() {
    const [showSideMenu, setShowSideMenu] = useState(false)
    useEffect(() => {
        console.log(showSideMenu)
    }, [showSideMenu])
    return (
        <div className='h-screen w-screen'>
            <video
                src={btvfondo}
                autoPlay={true}
                muted={true}
                loop={true}
                className='h-full w-full object-cover absolute -z-10'></video>
            <MenuSelect />
            {/* <div */}
            {/* className={`z-10 w-screen h-screen transition-opacity absolute backdrop-opacity-${ */}
            {/* showSideMenu ? 100 : 0 */}
            {/* }`}></div> */}
        </div>
    )
}

export default App
