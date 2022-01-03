// how to declare arrays

const frasesDeMax = [
    ':V',
    'no puedo parar de llorar',
    'gordo',
    'ser normal es aburrido',
    'duermo sin ropa por que estoy mas calentito',
    'soy confitero',
]
const frasesDeLynus = [
    'Miren! ¿Es un lloron? No ¿Es un quejon? No!! es un argentino!!',
    `Si tienes razon man pero yo entro a jugar 2 horas al dia al l4d2
    Tu en tu tiempo lo intentaste y nunca mejoraste en ningun aspecto como jugador ni persona
    No me puedo amagar contigo por que
    esa sensacion de no progresar del pasado siento pena por eso
    y espero puedas ser feliz o si lo eres te deseo lo mejor
    Si tu  sigues resentido por tonterias del pasado
    sorry por eso entonces
    que no puedas lograr olvidar el pasado que tu mismo atacaste`,
]
const arrayDeNumeros = [2, 5, 69, 420, 360, 'noscope']

// how to access the elements of an array

console.log(frasesDeLynus[0])

console.log(frasesDeMax[4])

// how to add a new element to an array

frasesDeMax.push('soy un poste de luz')

frasesDeLynus.push('vivo en el cerro')

arrayDeNumeros.push(10)

// how to remove the last element of an array

arrayDeNumeros.pop()

const fraseDeLynus = frasesDeLynus.pop() // saving it in a variable
