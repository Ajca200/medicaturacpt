//traemos los datos
const parrafo1 = document.getElementById('parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const parrafo3 = document.getElementById('parrafo3');
const parrafo4 = document.getElementById('parrafo4');
const parrafo5 = document.getElementById('parrafo5');
const parrafo6 = document.getElementById('parrafo6');
const requisitos1 = document.getElementById('requisitos1');
const requisitos2 = document.getElementById('requisitos2');
const requisitos3 = document.getElementById('requisitos3');

//creamos una funcion para el observador
const animacion = (entradas, observador) => {
	entradas.forEach((entrada) => {
		if (entrada.isIntersecting){
			entrada.target.classList.add('lorem_visible');
		} else{
			entrada.target.classList.remove('lorem_visible');
		}
	});
};

//creamos el observador
const observador = new IntersectionObserver(animacion,{
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0.5
});

//le indicamos al observador que datos vigilar
observador.observe(parrafo1);
observador.observe(parrafo2);
observador.observe(parrafo3);
observador.observe(parrafo4);
observador.observe(parrafo5);
observador.observe(parrafo6);
observador.observe(requisitos1);
observador.observe(requisitos2);
observador.observe(requisitos3);
