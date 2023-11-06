const tooltip_ubicacion = document.getElementById('tooltip-ubicacion');
const ubicacion = document.getElementById('ubicacion55');
const tooltip_contacto = document.getElementById('tooltip-contacto');
const contacto = document.getElementById('contacto2');
const telefono1 = document.getElementById('numero-programador1');
const telefono2 = document.getElementById('numero-programador2');
const telefono3 = document.getElementById('numero-programador3');
const telefono4 = document.getElementById('numero-programador4');
const tooltip_correo = document.getElementById('tooltip-correo');
const telegram1 = document.getElementById('telegram1');
const telegram2 = document.getElementById('telegram2');
const telegram3 = document.getElementById('telegram3');
const telegram4 = document.getElementById('telegram4');
const correo = document.getElementById('correo');
const correo2 = document.getElementById('correo2');
const correo3 = document.getElementById('correo3');
const correo4 = document.getElementById('correo4');
const texto_correo = document.querySelector('.correo');

function tooltip_ubi () {
	const y = ubicacion.offsetTop;
	const x = ubicacion.offsetLeft;
	const anchoTooltip = tooltip_ubicacion.clientWidth;
	const altoTooltip = tooltip_ubicacion.clientHeight;

	const arriba = y - altoTooltip - 12;
	const izquierda = x - (anchoTooltip / 2) + 15;

	tooltip_ubicacion.style.top = `${arriba}px`;
	tooltip_ubicacion.style.left = `${izquierda}px`;
	// body... 
}
let  timer;
window.addEventListener('load', ()=>{
	tooltipCorreo();
	tooltip_ubi();
});

window.addEventListener('resize', () => tooltip_ubi());
ubicacion.addEventListener('mouseenter', () => {
	tooltip_ubicacion.classList.add('tooltip-activo');
	tooltip_ubi();
});
tooltip_ubicacion.addEventListener('mouseleave', () => {
	tooltip_ubicacion.classList.remove('tooltip-activo');
});
ubicacion.addEventListener('mouseleave', () => {
	timer = setTimeout(() => {
		tooltip_ubicacion.classList.remove('tooltip-activo');
	}, 200)
});
tooltip_ubicacion.addEventListener('mouseenter', () => {
	clearTimeout(timer);
});
function tooltip_contac () {
	const y = contacto.offsetTop;
	const x = contacto.offsetLeft;
	const anchoTooltip = tooltip_contacto.clientWidth;
	const altoTooltip = tooltip_contacto.clientHeight;

	const arriba = y - altoTooltip - 12;
	const izquierda = x - (anchoTooltip / 2) + 15;

	tooltip_contacto.style.top = `${arriba}px`;
	tooltip_contacto.style.left = `${izquierda}px`;
	// body... 
}
window.addEventListener('load', () => tooltip_contac());
window.addEventListener('resize', () => tooltip_contac());
contacto.addEventListener('mouseenter', () => {
	tooltip_contacto.classList.add('tooltip-activo');
	tooltip_contac();
});
tooltip_contacto.addEventListener('mouseleave', () => {
	tooltip_contacto.classList.remove('tooltip-activo');
});
contacto.addEventListener('mouseleave', () => {
	timer = setTimeout(() => {
		tooltip_contacto.classList.remove('tooltip-activo');
	}, 200)
});
tooltip_contacto.addEventListener('mouseenter', () => {
	clearTimeout(timer);
});

telefono1.addEventListener('click', ()=>{
	window.location.href="https://api.whatsapp.com/send?phone=584147359478";
});
telefono2.addEventListener('click', ()=>{
	window.location.href="https://api.whatsapp.com/send?phone=573005609582";
});
telefono3.addEventListener('click', ()=>{
	window.location.href="https://api.whatsapp.com/send?phone=573005609582";
});
telefono4.addEventListener('click', ()=>{
	window.location.href="https://api.whatsapp.com/send?phone=584126648039";
}); 
telegram1.addEventListener('click', () => {
	window.location.href="https://t.me/+584147359478";
});
telegram2.addEventListener('click', () => {
	window.location.href="https://t.me/+573005609582";
});
telegram3.addEventListener('click', () => {
	window.location.href="https://t.me/+573005609582";
});
telegram4.addEventListener('click', () => {
	window.location.href="https://t.me/+584126648039";
});
 //tooltipa 1er desarrollador
function tooltipCorreo () {
	const y = correo.offsetTop;
	const x = correo.offsetLeft;
	const anchoTooltip = tooltip_correo.clientWidth;
	const altoTooltip = tooltip_correo.clientHeight;

	const arriba = y - altoTooltip - 12;
	const izquierda = x - (anchoTooltip / 2) + 15;

	tooltip_correo.style.top = `${arriba}px`;
	tooltip_correo.style.left = `${izquierda}px`;
}
let time2;
window.addEventListener('resize', () => tooltipCorreo());
correo.addEventListener('mouseenter', () => {
	tooltipCorreo();
	setTimeout(()=>{
		tooltip_correo.classList.add('tooltip-activo');
	}, 200);
	texto_correo.innerHTML = "abrahancolmenares022@gmail.com";
});
tooltip_correo.addEventListener('mouseleave', () => {
	tooltip_correo.classList.remove('tooltip-activo');
});
correo.addEventListener('mouseleave', () => {
	timer2 = setTimeout(() => {
		tooltip_correo.classList.remove('tooltip-activo');
	}, 200)
});
tooltip_correo.addEventListener('mouseenter', () => {
	clearTimeout(timer2);
});
//tooltip 2do desarrollador
correo2.addEventListener('mouseenter', () => {
	tooltipCorreo2();
	setTimeout(()=>{
		tooltip_correo.classList.add('tooltip-activo');
	}, 200);
	texto_correo.innerHTML = "albarracinalexis631@gmail.com";
});
correo2.addEventListener('mouseleave', () => {
	timer2 = setTimeout(() => {
		tooltip_correo.classList.remove('tooltip-activo');
	}, 200)
});
function tooltipCorreo2 () {
	const y = correo2.offsetTop;
	const x = correo2.offsetLeft;
	const anchoTooltip = tooltip_correo.clientWidth;
	const altoTooltip = tooltip_correo.clientHeight;

	const arriba = y - altoTooltip - 12;
	const izquierda = x - (anchoTooltip / 2) + 15;

	tooltip_correo.style.top = `${arriba}px`;
	tooltip_correo.style.left = `${izquierda}px`;
}
//tooltip 3er desarrollador
correo3.addEventListener('mouseenter', () => {
	tooltipCorreo3();
	setTimeout(()=>{
		tooltip_correo.classList.add('tooltip-activo');
	}, 200);
	texto_correo.innerHTML = "xxxxxxxxxxxxxxxxx@gmail.com";
});
correo3.addEventListener('mouseleave', () => {
	timer2 = setTimeout(() => {
		tooltip_correo.classList.remove('tooltip-activo');
	}, 200)
});
function tooltipCorreo3 () {
	const y = correo3.offsetTop;
	const x = correo3.offsetLeft;
	const anchoTooltip = tooltip_correo.clientWidth;
	const altoTooltip = tooltip_correo.clientHeight;

	const arriba = y - altoTooltip - 12;
	const izquierda = x - (anchoTooltip / 2) + 15;

	tooltip_correo.style.top = `${arriba}px`;
	tooltip_correo.style.left = `${izquierda}px`;
}
//tooltip 4to desarrollador
correo4.addEventListener('mouseenter', () => {
	tooltipCorreo4();
	setTimeout(()=>{
		tooltip_correo.classList.add('tooltip-activo');
	}, 200);
	texto_correo.innerHTML = "xxxxxxxxxxxxxxx@gmail.com";
});
correo4.addEventListener('mouseleave', () => {
	timer2 = setTimeout(() => {
		tooltip_correo.classList.remove('tooltip-activo');
	}, 200)
});
function tooltipCorreo4 () {
	const y = correo4.offsetTop;
	const x = correo4.offsetLeft;
	const anchoTooltip = tooltip_correo.clientWidth;
	const altoTooltip = tooltip_correo.clientHeight;

	const arriba = y - altoTooltip - 12;
	const izquierda = x - (anchoTooltip / 2) + 15;

	tooltip_correo.style.top = `${arriba}px`;
	tooltip_correo.style.left = `${izquierda}px`;
}