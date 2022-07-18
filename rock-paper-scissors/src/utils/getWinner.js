export function getWinner(playerOption, botOption) {
    if (playerOption === botOption) {
        return 'none'
    }
    if (playerOption === 'piedra') {
        if (botOption === 'tijera') {
            return 'player'
        }
        if (botOption === 'papel') {
            return 'bot'
        }
    }
    if (playerOption === 'papel') {
        if (botOption === 'piedra') {
            return 'player'
        }
        if (botOption === 'tijera') {
            return 'bot'
        }
    }
    if (playerOption === 'tijera') {
        if (botOption === 'papel') {
            return 'player'
        }
        if (botOption === 'piedra') {
            return 'bot'
        }
    }
}
