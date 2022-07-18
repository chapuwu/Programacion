import React from 'react'
import RoundWin from './RoundWin'
import RoundLost from './RoundLost'
import RoundTie from './RoundTie'
import Winner from './Winner'
import Loose from './Loose'
import { gameStatus } from './Game'

export default function Status({ status, restartGame }) {
    switch (status) {
        case gameStatus.WIN:
            return <RoundWin />
        case gameStatus.LOSE:
            return <RoundLost />
        case gameStatus.TIE:
            return <RoundTie />
        case gameStatus.GAME_LOSE:
            return <Loose restartGame={restartGame} />
        case gameStatus.GAME_WIN:
            return <Winner restartGame={restartGame} />
        default:
            return null
    }
}
