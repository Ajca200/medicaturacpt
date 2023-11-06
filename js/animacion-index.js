//traemos los datos
const resena = document.getElementById('resena');
const area1 = document.getElementById('area1');
const area2 = document.getElementById('area2');
const area3 = document.getElementById('area3');
const area4 = document.getElementById('area4');
const area5 = document.getElementById('area5');
const area6 = document.getElementById('area6');
const parrafo1 = document.getElementById('parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const parrafo3 = document.getElementById('parrafo3');
const tabla1 = document.getElementById('tabla1');
const tabla2 = document.getElementById('tabla2');

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
observador.observe(resena);
observador.observe(area1);
observador.observe(area2);
observador.observe(area3);
observador.observe(area4);
observador.observe(area5);
observador.observe(area6);
observador.observe(parrafo1);
observador.observe(parrafo2);
observador.observe(parrafo3);
observador.observe(tabla1);
observador.observe(tabla2);