"use strict";
let numero = 0;
const anterior = document.querySelector('.bajarnumero');
const reset = document.querySelector('.reiniciar');
const siguiente = document.querySelector('.subirnumero');
let numeroHTML = document.querySelector('.numero');
anterior.addEventListener('click', () => {
    numero--;
    numeroHTML.innerHTML = `${numero}`;
});
siguiente.addEventListener('click', () => {
    numero++;
    numeroHTML.innerHTML = `${numero}`;
});
reset.addEventListener('click', () => {
    numero = 0;
    numeroHTML.innerHTML = `${numero}`;
});
