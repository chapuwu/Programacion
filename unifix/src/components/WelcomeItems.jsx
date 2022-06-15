import React from 'react'
import MoreInfo from './MoreInfo'

export default function WelcomeItems({ text, mapa, slots }) {
    const moreInfoItems = [
        {
            ip: 'xxxx.xxxx.xxxx:xxxx',
            playerList: 'Facundetox - Emmamis - Maxtrol0 - MonsterEinshel',
        },
    ]
    return (
        <li className='bg-slate-800 text-white mt-2 w-auto flex flex-row'>
            <div className='w-1/4 flex flex-col text-white'>
                <button>{text}</button>
                <p>{mapa}</p>
                <p>{slots}</p>
                <button>View</button>
            </div>
            {moreInfoItems.map((item) => (
                <MoreInfo ip={item.ip} playerList={item.playerList} key={moreInfoItems} />
            ))}
        </li>
    )
}
