"use strict";
const input = document.querySelector('.input');
const botonEnviar = document.querySelector('.botonenviar');
const listaTodo = document.querySelector('.todo-list');
input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        agregarTodo(input.value);
        input.value = '';
    }
});
botonEnviar === null || botonEnviar === void 0 ? void 0 : botonEnviar.addEventListener('click', () => {
    agregarTodo(input.value);
    input.value = '';
});
function agregarTodo(todo) {
    estado.todoIncompleto.push(todo);
    render();
}
function render() {
    listaTodo.innerHTML = '';
    estado.todoIncompleto.forEach((todo) => {
        const li = crearLi(todo);
        listaTodo.appendChild(li);
    });
}
function crearLi(todo) {
    const li = document.createElement('li');
    li.innerText = todo;
    return li;
}
const estado = {
    todoIncompleto: [],
};
// esto se hizo lo mas rapido posible
