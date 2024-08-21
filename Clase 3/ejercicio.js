const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

let libro = {
    titulo: "Muerte en el Nilo",
    autor: "Agatha Christie",
    año: 1937
};

//Convertir el objeto en una cadena JSON
let libroJSON = JSON.stringify(libro);

//Guardar la cadena JSON en el Local Storage
localStorage.setItem('libro', libroJSON);

//Recuperar el objeto del Local Storage
let libroRecuperadoJSON = localStorage.getItem('libro');
let libroRecuperado = JSON.parse(libroRecuperadoJSON);

console.log(libroRecuperado);
