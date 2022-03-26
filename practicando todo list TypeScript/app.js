"use strict";
const texto = document.querySelector('.texto');
const botonEnviar = document.querySelector('.botonenviar');
const tareasIncompletas = document.querySelector('.tareas-incompletas > ul');
const tareasCompletas = document.querySelector('.tareas-completas > ul');
const botonEliminar = document.querySelector('.del');
const botonFinalizar = document.querySelector('.terminado');
const botonEditar = document.querySelector('.editar');
const estado = {
    todosIncompletos: [],
    todosCompletos: [],
};
texto.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTodo(texto.value);
        texto.value = '';
    }
});
botonEnviar.addEventListener('click', () => {
    addTodo(texto.value);
    texto.value = '';
});
botonEliminar.addEventListener('click', () => {
    const index = estado.todosIncompletos.indexOf(tareasIncompletas.innerHTML);
    estado.todosIncompletos.splice(index, 1);
    renderizar();
});
function addTodo(tarea) {
    estado.todosIncompletos.push(tarea);
    renderizar();
}
function addLiElement(tarea) {
    const li = document.createElement('li');
    li.innerHTML = tarea;
    const botones = document.createElement('button');
    botones.classList.add('estilosBotones');
    botones.classList.add('del');
    botones.innerHTML = 'X';
    li.appendChild(botones);
    return li;
}
function renderizar() {
    tareasIncompletas.innerHTML = '';
    tareasCompletas.innerHTML = '';
    estado.todosIncompletos.forEach((tarea) => {
        const li = addLiElement(tarea);
        tareasIncompletas.appendChild(li);
    });
    estado.todosCompletos.forEach((tarea) => {
        const li = addLiElement(tarea);
        tareasCompletas.appendChild(li);
    });
}
