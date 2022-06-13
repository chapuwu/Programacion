import React from 'react'
import WelcomeItems from './WelcomeItems'

export default function Welcome() {
    const welcomeItems = [
        {
            text: 'Unifix #1',
            mapa: 'c1m2_streets',
            slots: '5/10',
            masinfo: { ip: 'xxxx.xxxx.xxxx:xxxx', playersList: 'fachu masterangel max mis' },
        },
    ]
    return (
        <div className='bg-slate-400 flex justify-between rounded-xl h-1/4 w-1/2'>
            <div className='w-full flex flex-col justify-around'>
                <h1 className='text-3xl text-center'>Bienvenido a Unifix!</h1>
                <h2 className='text-center text-xl mt-4'>Servidores</h2>
                <ul>
                    {welcomeItems.map((item) => (
                        <WelcomeItems text={item.text} mapa={item.mapa} slots={item.slots} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
