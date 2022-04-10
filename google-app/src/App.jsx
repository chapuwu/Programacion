import { useState } from 'react'
import './App.css'

function App() {
    return (
        <div className='App'>
            <div className='container-oficial'>
                <img
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png'
                    alt='google'
                />
                <div className='input-iconos'>
                    <svg focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                        <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
                    </svg>
                    <input type='text' />
                    <svg class='goxjub' focusable='false' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fill='#4285f4'
                            d='m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z'></path>
                        <path fill='#34a853' d='m11 18.08h2v3.92h-2z'></path>
                        <path
                            fill='#fbbc04'
                            d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z'></path>
                        <path
                            fill='#ea4335'
                            d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'></path>
                    </svg>
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
            <div className='bottom-1'>
                <p className='texto-bottom'>Argentina</p>
            </div>
            <br />
            <div className='bottom-2'></div>
        </div>
    )
}

export default App
