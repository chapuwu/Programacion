export function getRandomOption() {
    const options = ['piedra', 'papel', 'tijera']
    const botOption = options[Math.floor(Math.random() * options.length)] //elige una opcion random
    return botOption
}
