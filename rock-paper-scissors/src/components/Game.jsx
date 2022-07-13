import React from 'react'
import Buttons from './Buttons'
import Points from './Points'
import Bot from './Bot'
import { useState, useEffect } from 'react'
import { getRandomOption } from '../utils/getRandomOption'
import { getWinner } from '../utils/getWinner'
import Globe from './Globe'
import Status from './Status'

export const gameStatus = {
    WIN: 'win',
    LOSE: 'lose',
    TIE: 'tie',
    GAME_LOSE: 'game-lose',
    GAME_WIN: 'game-win',
}

export default function Game() {
    const [drawOption, setDrawOption] = useState(null)
    const [botOption, setBotOption] = useState(null)
    const [playerPoints, setPlayerPoints] = useState(0)
    const [botPoints, setBotPoints] = useState(0)
    const [status, setStatus] = useState(null)

    function onButtonClick(option) {
        if (drawOption === null) {
            setDrawOption(option)
        }
    }

    function restartGame() {
        setDrawOption(null)
        setBotOption(null)
        setPlayerPoints(0)
        setBotPoints(0)
        setStatus(null)
    }

    useEffect(() => {
        if (drawOption === null) {
            return
        }
        // generating a random option for the bot
        const randomBotOption = getRandomOption()
        setBotOption(randomBotOption)

        const winner = getWinner(drawOption, randomBotOption)

        if (winner === 'bot') {
            const newBotPoints = botPoints + 1
            setBotPoints(newBotPoints)
            if (newBotPoints === 3) {
                setStatus(gameStatus.GAME_LOSE)
                return
            } else {
                setStatus(gameStatus.LOSE)
            }
        } else if (winner === 'player') {
            const newPlayerPoints = playerPoints + 1
            setPlayerPoints(newPlayerPoints)
            if (newPlayerPoints === 3) {
                setStatus(gameStatus.GAME_WIN)
                return
            } else {
                setStatus(gameStatus.WIN)
            }
        } else {
            setStatus(gameStatus.TIE)
        }

        setTimeout(() => {
            setDrawOption(null)
            setBotOption(null)
            setStatus(null)
        }, 1200)
    }, [drawOption])

    return (
        <div className='h-full flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Bot />
                <Globe option={botOption} bot={true} />
            </div>
            <Status status={status} restartGame={restartGame} />
            <div className='flex flex-col items-center'>
                <Globe option={drawOption} bot={false} />
                <Buttons onButtonClick={onButtonClick} />
                <Points text={`( you ) ${playerPoints} - ${botPoints} ( bot )`} />
            </div>
        </div>
    )
}
