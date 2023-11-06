// 1. hacemos aparecer el formulario
const body = document.getElementById('body');
const abrirFormulario = document.querySelector('#abrir-formulario');
const formulario = document.getElementById('formulario');
const close = document.querySelector('.btn-close');
const main = document.getElementById('main');
const header = document.getElementById('header');
const home = document.getElementById('home');
const mensaje = document.getElementById('contenedor-mensaje');
const btn_mensaje = document.getElementById('btn-mensaje');
const btn_close = document.getElementById('close');
const btn_mensaje2 = document.getElementById('submit-mensaje');

// agregamos un evento (onclick)
//eventos de los mensajes (abrir la mensajeria)
btn_mensaje.addEventListener('click', (e) => {
	e.preventDefault();
	mensaje.classList.add('contenedor-mensaje-visible');
	main.classList.add('main');
	header.classList.add('main');
});
//eventos de los mensajes (cerrar la mensajeria)
btn_close.addEventListener('click', (e) => {
	e.preventDefault();
	mensaje.classList.remove('contenedor-mensaje-visible');
	main.classList.remove('main');
	header.classList.remove('main');
});
//eventos del formulario (abrir el formulario)
abrirFormulario.addEventListener('click', (e) => {
	e.preventDefault();
	abrirFormulario.classList.add('btn-primary');
	home.classList.remove('btn-primary');
	formulario.classList.add('ver-formulario'); //agregamos una clase a la etiqueta HTML
	main.classList.add('main');
	header.classList.add('main');
	body.style.overflow = 'hidden';
});
//eventos del formulario (cerrar el formulario)
close.addEventListener('click', (e) => {
	e.preventDefault();
	abrirFormulario.classList.remove('btn-primary');
	home.classList.add('btn-primary');
	formulario.classList.remove('ver-formulario'); //removemos clase para ocultar formulario
	main.classList.remove('main');
	header.classList.remove('main');
	body.style.overflow = 'visible';
});

//enviando mensaje(animacion)
const btn = document.getElementById('btn-formulario');

btn_mensaje2.addEventListener('click', () => {
	const enviando = document.getElementById('enviando');
	enviando.innerHTML="Enviando...";
	setTimeout(()=>{
		enviando.innerHTML="Enviado";
		mensaje.classList.remove('contenedor-mensaje-visible');
		main.classList.remove('main');
		header.classList.remove('main');
	}, 1000);
});

