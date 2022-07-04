import React from 'react'
import Buttons from './Buttons'
import Points from './Points'
import MyTurn from './MyTurn'
import Winner from './Winner'
import Oponent from './Oponent'

export default function Game() {
    return (
        <div className='flex flex-col items-center w-full'>
            <Oponent />
            <Winner text='you win!' />
            <MyTurn />
            <Buttons />
            <Points text='( you ) 2 - 1 ( bot )' />
        </div>
    )
}
