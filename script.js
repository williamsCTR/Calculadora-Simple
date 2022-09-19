const display1 = document.querySelector('.calculadora__display-1');
const display2 = document.querySelector('.calculadora__display-2');
const botonesNumeros = document.querySelectorAll('.calculadora__button');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display (display1,display2);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});