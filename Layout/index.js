const liHome = document.querySelector('#li-home');
const liZpotify = document.querySelector('#li-zpotify');
const liWsp = document.querySelector('#li-wsp');

liHome.addEventListener('click', cargarHome );
liZpotify.addEventListener('click', cargarZpotify );    
liWsp.addEventListener('click', cargarWsp );

const contDinamico = document.querySelector('#contenido-dinamico');
const nombrePagina = document.querySelector('#nombre-pagina');

function cargarHome() {
    
    contDinamico.setAttribute('src', '../Home/index.html');
    nombrePagina.innerHTML = 'Zafary'
}
function cargarZpotify() {
    contDinamico.setAttribute('src', '../zpotify/index.html');
    nombrePagina.innerHTML = 'Zpotify'
}
function cargarWsp() {

    contDinamico.setAttribute('src', '../WhatZapp/index.html');
    nombrePagina.innerHTML = 'WhatZapp'
}

