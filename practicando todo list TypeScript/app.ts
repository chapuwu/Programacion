const texto: HTMLInputElement = document.querySelector('.texto')!
const botonEnviar = document.querySelector('.botonenviar')
const tareasIncompletas = document.querySelector('.tareas-incompletas > ul')
const tareasCompletas = document.querySelector('.tareas-completas > ul')

interface Estado {
    todosIncompletos: string[]
    todosCompletos: string[]
}

const estado: Estado = {
    todosIncompletos: [],
    todosCompletos: [],
}

texto!.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTodo(texto.value)
        texto.value = ''
    }
})

botonEnviar!.addEventListener('click', () => {
    addTodo(texto.value)
    texto.value = ''
})

function addTodo(tarea: string) {
    estado.todosIncompletos.push(tarea)
    renderizar()
}

function addLiElement(tarea: string) {
    const li = document.createElement('li')
    li.textContent = tarea
    return li
}

function renderizar() {
    tareasIncompletas!.textContent = ''
    tareasCompletas!.textContent = ''

    estado.todosIncompletos.forEach((tarea) => {
        const li = addLiElement(tarea)
        tareasIncompletas!.appendChild(li)

        // BOTON BORRAR
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('estilosBotones')
        deleteButton.textContent = '❌'
        li.appendChild(deleteButton)
        deleteButton.addEventListener('click', () => {
            const index = estado.todosIncompletos.indexOf(tarea)
            estado.todosIncompletos.splice(index, 1)
            renderizar()
        })

        // BOTON EDITAR
        const editButton = document.createElement('button')
        editButton.classList.add('estilosBotones')
        editButton.textContent = '✏️'
        li.appendChild(editButton)
        editButton.addEventListener('click', () => {
            const textoEditado = prompt('editar tarea:')
            if (textoEditado !== null) {
                const index = estado.todosIncompletos.indexOf(tarea)
                estado.todosIncompletos[index] = textoEditado
                li.childNodes[0].textContent = textoEditado
            }
        })

        // BOTON TERMINADO, es pensarlo de otra forma
        // totalmente distinta que esta bosta imperativa, react es declarativo
        // programacion imperativa es decir paso a paso que hacer
        // por ejemplo un ejempl ode la vida real, imperativo seria:
        //     - poner harina
        //       - poner agua
        //         - poner la tanga de tu vieja
        //         - amasar
        //         - prende el horno
        //          - ponelo adentro
        //              - etc
        // declarativo seria:
        //     - HACE UN PAN
        //       - COCINALO
        // es mas facil, idiota
        // javascript vanilla es imperativo, tenes uqe decirle cada cosa, como amasar, poner agua, etc
        // en cambio en react es declarativo todo, decis que queres hacer, no como hacerlo
        // react + typescript = <333 boe re max
        const doneButton = document.createElement('button')
        doneButton.classList.add('estilosBotones')
        doneButton.innerHTML = '✔️'
        li.appendChild(doneButton)
        doneButton.addEventListener('click', () => {
            estado.todosCompletos.push(tarea)
            const index = estado.todosIncompletos.indexOf(tarea)
            estado.todosIncompletos.splice(index, 1)
            renderizar()
        })
    })

    estado.todosCompletos.forEach((tarea) => {
        const li = addLiElement(tarea)
        tareasCompletas!.appendChild(li)
    })
}
