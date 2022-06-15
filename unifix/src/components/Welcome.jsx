import React from 'react'
import WelcomeItems from './WelcomeItems'

export default function Welcome() {
    const welcomeItems = [
        {
            text: 'Unifix #1',
            mapa: 'c1m2_streets',
            slots: '5/10',
        },
        {
            text: 'Unifix #2',
            mapa: 'c5m1_waterfront',
            slots: '8/10',
        },
        {
            text: 'Unifix #3',
            mapa: 'c10m3_ranchhouse',
            slots: '10/10',
        },
        {
            text: 'Unifix #4',
            mapa: 'c4m2_sugarmill_a',
            slots: '2/10',
        },
    ]
    return (
        <div className='bg-slate-400 flex justify-between rounded-xl h-1/4 w-1/2'>
            <div className='w-full flex flex-col justify-around'>
                <h1 className='text-3xl text-center'>Bienvenido a Unifix!</h1>
                <h2 className='text-center text-xl mt-4'>Servidores</h2>
                <ul>
                    {welcomeItems.map((item) => (
                        <WelcomeItems text={item.text} mapa={item.mapa} slots={item.slots} key={welcomeItems} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
