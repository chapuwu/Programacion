import React from 'react'
import Buttons from './Buttons'
import Points from './Points'
import MyTurn from './MyTurn'
import Oponent from './Oponent'
import Winner from './Winner'
import Loose from './Loose'
import Bot from './Bot'
import { useState } from 'react'
import { getRandomOption } from '../utils/getRandomOption'
import { getWinner } from '../utils/getWinner'

export default function Game() {
    const [drawOption, setDrawOption] = useState(null)
    const [playerPoints, setPlayerPoints] = useState(0)
    const [botPoints, setBotPoints] = useState(0)

    function playRound() {
        // generating a random option for the bot
        const botOption = getRandomOption()
        const winner = getWinner(drawOption, botOption)
        if (winner === 'bot') {
            setBotPoints(botPoints + 1)
        } else if (winner === 'player') {
            setPlayerPoints(playerPoints + 1)
        } else {
        }
        console.log(`player:${drawOption}\nbot: ${botOption}`)
    }

    return (
        <div className='flex flex-col items-center w-full'>
            <Bot />
            <Oponent />
            <MyTurn drawOption={drawOption} />
            <Buttons setDrawOption={setDrawOption} playRound={playRound} />
            <Points text={`( you ) ${playerPoints} - ${botPoints} ( bot )`} />
        </div>
    )
}
