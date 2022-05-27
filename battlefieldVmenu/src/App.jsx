import { useState } from 'react'
import MenuSelect from './components/MenuSelect'
import SideMenu from './components/SideMenu'

function App() {
    return (
        <div className='bg-black h-screen w-screen'>
            <SideMenu />
            <MenuSelect />
        </div>
    )
}

export default App
