//traemos los datos
const preloader = document.querySelector('.pre-loader');
const body = document.querySelector('.body');

//accedemos a la propiedad window y le agreamos un evento (load)
window.addEventListener('load', () => {
	setTimeout(() => {
		preloader.style.opacity = '0'; //cambiar estilos CSS
		preloader.style.pointerEvents = 'none'; //cambiar estilos CSS
		body.classList.remove('body'); //removemos la clase (body)
	}, 500);
});