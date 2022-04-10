import React from 'react'
import './Footer.css'

export default function footer() {
    return (
        <div className='container-buttom'>
            <div className='bottom-1'>
                <p className='texto-bottom'>Argentina</p>
            </div>
            <div className='bottom-2'>
                <div className='izquierdo'>
                    <a href='https://about.google/'>About</a>
                    <a href='https://www.google.com/intl/en_ar/ads/'>Advertising</a>
                    <a href='https://www.google.com/services/'>Business</a>
                    <a href='https://google.com/search/howsearchworks/?fg=1'>How Search Works</a>
                </div>
                <div className='derecha'>
                    <a href='https://policies.google.com/privacy?hl=en-AR&fg=1'>Privacy</a>
                    <a href='https://policies.google.com/terms?hl=en-AR&fg=1'>Terms</a>
                    <a href='#'>Settings</a>
                </div>
            </div>
        </div>
    )
}
