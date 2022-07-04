import React from 'react'
import Buttons from './Buttons'
import Points from './Points'
import MyTurn from './MyTurn'
import Oponent from './Oponent'
import Winner from './Winner'
import Loose from './Loose'
import Bot from './Bot'

export default function Game() {
    return (
        <div className='flex flex-col items-center w-full'>
            <Bot />
            <Oponent />
            <MyTurn />
            <Buttons />
            <Points text='( you ) 2 - 1 ( bot )' />
        </div>
    )
}
