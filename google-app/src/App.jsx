import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Lupa from './components/Lupa'
import Microfono from './components/Microfono'
import Header from './components/Header'

function App() {
    const [search, setSearch] = useState('')

    function handleInputKeyUp(event) {
        if (event.key === 'Enter') {
            searchOnGoogle()
        }
    }
    function handleSearchClick() {
        searchOnGoogle()
    }

    function searchOnGoogle() {
        const url = new URL('search', 'https://google.com')
        url.searchParams.set('q', search)
        window.location.replace(url)
    }

    return (
        <div className='App'>
            <Header />
            <div className='container-oficial'>
                <img
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png'
                    alt='google'
                />
                <div className='input-iconos'>
                    <Lupa />
                    <input type='text' onKeyUp={handleInputKeyUp} onChange={(event) => setSearch(event.target.value)} />
                    <Microfono />
                </div>
                <div className='botones-buscar'>
                    <button onClick={handleSearchClick}>Google Search</button> <button>I'm Feeling Lucky</button>
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
