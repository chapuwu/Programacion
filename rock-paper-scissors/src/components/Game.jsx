import React from 'react'
import Buttons from './Buttons'
import Points from './Points'
import MyTurn from './MyTurn'
import Oponent from './Oponent'
import Winner from './Winner'
import Loose from './Loose'
import Bot from './Bot'
import { useState } from 'react'

export default function Game() {
    const [drawOption, setDrawOption] = useState(null)
    const [playerPoints, setPlayerPoints] = useState()
    const [botPoints, setBotPoints] = useState()

    function playRound(option) {}

    return (
        <div className='flex flex-col items-center w-full'>
            <Bot />
            <Oponent />
            <MyTurn drawOption={drawOption} />
            <Buttons setDrawOption={setDrawOption} playRound={playRound} />
            <Points text='( you ) 2 - 1 ( bot )' />
        </div>
    )
}
