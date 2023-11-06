//traemos los datos
const btn_menu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-burger');
const btn_close = document.getElementById('btn-menu-close');

//agregamos evento (click)
btn_menu.addEventListener('click', () => {
	menu.classList.add('menu-burger-activo'); //agregamos una clase
});

btn_close.addEventListener('click', () => {
	menu.classList.remove('menu-burger-activo'); //removemos una clase
});
menu.addEventListener('mouseleave', () => {
	menu.classList.remove('menu-burger-activo'); //removemos una clase
});
