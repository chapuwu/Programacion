import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Lupa from './components/Lupa'
import Microfono from './components/Microfono'

function App() {
    return (
        <div className='App'>
            <div className='container-oficial'>
                <img
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png'
                    alt='google'
                />
                <div className='input-iconos'>
                    <Lupa />
                    <input type='text' />
                    <Microfono />
                </div>
                <div className='botones-buscar'>
                    <button>Google Search</button> <button>I'm Feeling Lucky</button>
                </div>
                <div className='texto-idioma'>
                    <p className='idioma'>
                        Google offered in: <a href=''>Español (Latinoamérica)</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
