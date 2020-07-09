//ejercicio 1
document.querySelector('h1').innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente.';
//ejercicio 2
let salomon = 18;
salomon = 19;
//ejercicio 3
document.querySelector('h2').innerHTML = 'Hola Mundo';
//ejercicio4
let li = 'salomon'
document.querySelector('.lista').innerHTML = " La persona seleccionada es: " + li;
//ejercicio 5
let contraseña = '********'; 
document.querySelector ('.parrafo').innerHTML = " mi contraseña es: " + contraseña
//ejercicio 6
const divsito = document.querySelector('.punto6')
const container = '<h1>Lorem Ipsum</h1><img src="http://via.placeholder.com/350x150"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';
divsito.innerHTML = container;
//ejercicio 7
const lista = document.querySelector('.punto7')
const content = '<li>1</li><li>2</li><li>3</li>';
lista.innerHTML = content;
//ejercicio 8
const Divsote= document.querySelector (".botonsito2")
Divsote.classList.add ("hidden")