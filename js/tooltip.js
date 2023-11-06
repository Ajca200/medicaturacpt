//traemos los datos
const tooltip_ubicacion = document.getElementById('tooltip-ubicacion');
const ubicacion = document.getElementById('ubicacion55');
const tooltip_contacto = document.getElementById('tooltip-contacto');
const contacto = document.getElementById('contacto2');

//creamos una funcion para el tooltip de la ubicacion
function tooltip_ubi () {
	const y = ubicacion.offsetTop; //medimos la distancia en vetical del elemento a aplicar el tooltip
	const x = ubicacion.offsetLeft; //medimos la distancia en horizontal del elemento a aplicar el tooltip
	const anchoTooltip = tooltip_ubicacion.clientWidth; //medimos el ancho de elemento a aplicar el tooltip
	const altoTooltip = tooltip_ubicacion.clientHeight; //medimos el alto de elemento a aplicar el tooltip

	const arriba = y - altoTooltip - 12; //calculamos las medidas en el eje Y
	const izquierda = x - (anchoTooltip / 2) + 15; //calculamos las medidas en el eje X

	tooltip_ubicacion.style.top = `${arriba}px`; //cambiamos estilos CSS aplicando las medidas obtenidas
	tooltip_ubicacion.style.left = `${izquierda}px`; //cambiamos estilos CSS aplicando las medidas obtenidas
	// body... 
}
let  timer;

//agreamos una evento para cuando cargue la pagina
window.addEventListener('load', ()=> tooltip_ubi());

//agreamos una evento para cuando redusca el tamaño de la pagina
window.addEventListener('resize', () => tooltip_ubi());
ubicacion.addEventListener('mouseenter', () => {
	tooltip_ubicacion.classList.add('tooltip-activo');
	tooltip_ubi();
});
//agreamos una evento para cuando el cursor salga del tooltip
tooltip_ubicacion.addEventListener('mouseleave', () => {
	tooltip_ubicacion.classList.remove('tooltip-activo');
});
//agreamos una evento para cuando el cursor salga del elemento del tooltip
ubicacion.addEventListener('mouseleave', () => {
	timer = setTimeout(() => {
		tooltip_ubicacion.classList.remove('tooltip-activo');
	}, 200)
});
//agreamos una evento para cuando el cursor entre al tooltip
tooltip_ubicacion.addEventListener('mouseenter', () => {
	clearTimeout(timer);
});
function tooltip_contac () {
	const y = contacto.offsetTop; //medimos la distancia en vetical del elemento al aplicar el tooltip
	const x = contacto.offsetLeft; //medimos la distancia en horizontal del elemento a aplicar el tooltip
	const anchoTooltip = tooltip_contacto.clientWidth; //medimos el ancho de elemento a aplicar el tooltip
	const altoTooltip = tooltip_contacto.clientHeight; //medimos el alto de elemento a aplicar el tooltip

	const arriba = y - altoTooltip - 12; //calculamos las medidas en el eje Y
	const izquierda = x - (anchoTooltip / 2) + 15; //calculamos las medidas en el eje X

	tooltip_contacto.style.top = `${arriba}px`; //cambiamos estilos CSS aplicando las medidas obtenidas
	tooltip_contacto.style.left = `${izquierda}px`; //cambiamos estilos CSS aplicando las medidas obtenidas
	// body... 
}

//agreamos una evento para cuando cargue la pagina
window.addEventListener('load', () => tooltip_contac());

//agreamos una evento para cuando redusca el tamaño de la pagina
window.addEventListener('resize', () => tooltip_contac());
contacto.addEventListener('mouseenter', () => {
	tooltip_contacto.classList.add('tooltip-activo');
	tooltip_contac();
});
//agreamos una evento para cuando el cursor salga del tooltip
tooltip_contacto.addEventListener('mouseleave', () => {
	tooltip_contacto.classList.remove('tooltip-activo');
});
//agreamos una evento para cuando el cursor salga del elemento del tooltip
contacto.addEventListener('mouseleave', () => {
	timer = setTimeout(() => {
		tooltip_contacto.classList.remove('tooltip-activo');
	}, 200)
});
//agreamos una evento para cuando el cursor entre al tooltip
tooltip_contacto.addEventListener('mouseenter', () => {
	clearTimeout(timer);
});

