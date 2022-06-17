import React, { useState } from 'react'
import MoreInfo from './MoreInfo'

export default function WelcomeItems({ text, mapa, slots }) {
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    return (
        <li className='text-white mt-2 flex flex-col text-center' onClick={() => setShowMoreInfo(!showMoreInfo)}>
            <div className='w-full flex bg-slate-800 h-10 items-center justify-around  text-white'>
                <p className='w-1/3'>{slots}</p>
                <p className='w-1/3 text-xl'>{text}</p>
                <p className='w-1/3'>{mapa}</p>
            </div>
            <MoreInfo
                ip='ip: xxxx.xxxx.xxxx:xxxxx'
                playerList='Players: Facundetox - Emmamis - Maxtrol0 - MonsterEinshel'
            />
        </li>
    )
}
