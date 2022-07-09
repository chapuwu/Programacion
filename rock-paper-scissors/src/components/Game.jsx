import React from 'react'
import Buttons from './Buttons'
import Points from './Points'
import MyTurn from './MyTurn'
import Oponent from './Oponent'
import Winner from './Winner'
import Loose from './Loose'
import Bot from './Bot'
import { useState, useEffect } from 'react'
import { getRandomOption } from '../utils/getRandomOption'
import { getWinner } from '../utils/getWinner'

export default function Game() {
    const [drawOption, setDrawOption] = useState('piedra')
    const [botOption, setBotOption] = useState('papel')
    const [playerPoints, setPlayerPoints] = useState(0)
    const [botPoints, setBotPoints] = useState(0)

    useEffect(() => {
        if (drawOption === null) {
            return
        }
        // generating a random option for the bot
        const randomBotOption = getRandomOption()
        setBotOption(randomBotOption)

        const winner = getWinner(drawOption, randomBotOption)

        // setTimeout(() => {
        //     if (winner === 'bot') {
        //         setBotPoints(botPoints + 1)
        //     } else if (winner === 'player') {
        //         setPlayerPoints(playerPoints + 1)
        //     } else {
        //     }
        //     setDrawOption(null)
        //     setBotOption(null)
        // }, 1000)
    }, [drawOption])

    return (
        <div className='flex flex-col items-center w-full'>
            <Bot />
            <Oponent botOption={botOption} />
            <MyTurn drawOption={drawOption} />
            <Buttons setDrawOption={setDrawOption} />
            <Points text={`( you ) ${playerPoints} - ${botPoints} ( bot )`} />
        </div>
    )
}
