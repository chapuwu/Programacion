function saludar(persona: string) {
    console.log(`Hola ${persona}`)
}

saludar('emmanuel')

// ESTO ES TYPESCRIPT, SOLO PARA EL COMPILADOR, NO SE EJECUTA, NO ES CODIGO, ES DECLARACION DE TIPOS NOMAS
interface State {
    incompleto: string[]
    completo: string[]
    jose: Algo
}

interface Algo {
    cosa: number
    cosa2: boolean
}

// ESTO ES CODIGO, JAVASCRIPT
const estado: State = {
    incompleto: [],
    completo: [],
    jose: {
        cosa: 1,
        cosa2: true,
    },
}

estado.incompleto.push('probanding')

// ENTENDES??, TIENE OTRO OBJETO ADENTRO, CON OTRA INTERFAZ
