const todos = funcionXd()

localStorage.setItem('todos', JSON.stringify(todos))

for (let i = 0; i < 3; i++) {
    const palabras = prompt('introduce una palabra')
    todos.push(palabras)
}

console.log(todos)

const dato = localStorage.getItem('todos')

console.log(dato)

if (dato === null) {
    console.log('no tiene valor pibe')
}
