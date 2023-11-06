//traemos los datos
const parrafo1 = document.getElementById('parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const parrafo3 = document.getElementById('parrafo3');
const parrafo4 = document.getElementById('parrafo4');
const lista1 = document.getElementById('lista1');
const lista2 = document.getElementById('lista2');
const img1 = document.getElementById('parto');

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
observador.observe(lista1);
observador.observe(lista2);
observador.observe(img1);