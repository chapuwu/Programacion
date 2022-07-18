import { describe, it, expect } from 'vitest'
import { getWinner } from '../utils/getWinner'

describe('getWinner', () => {
    it('should return player', () => {
        expect(getWinner('piedra', 'tijera')).toBe('player')
    })
    it('should return none', () => {
        expect(getWinner('papel', 'papel')).toBe('none')
    })
    it('should return bot', () => {
        expect(getWinner('papel', 'tijera')).toBe('bot')
    })
})
