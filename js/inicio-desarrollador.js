//Traemos los datos del HTML
const editor = document.querySelector('.editor');
const abrir_editor = document.getElementById('btn-editor');
const cerrar_editor = document.querySelector('.btn-close');
const img_edit = document.getElementById('file');
const respuesta = document.getElementById('respuesta');
const cerrar_sesion = document.querySelector('.cerrar');

//agregamos un evento para abrir el editor
abrir_editor.addEventListener('click', (e) => {
	e.preventDefault();
	editor.classList.add('abrir-editor');
});
//agregamos un evento para cerrar el editor
cerrar_editor.addEventListener('click', (e) => {
	e.preventDefault();
	editor.classList.remove('abrir-editor');
});
//agregamos un evento para cerrar sesion
cerrar_sesion.addEventListener('click',()=>{
	alert('SESION TERMINADA');
	window.location.href = "file:///C:/Users/Mi%20Pc/Music/PROYECTO%20UNI/index.html";
});

//agregamos evento para la funcionalidad del editor
img_edit.addEventListener('change', (e) => {
	e.preventDefault();//prevenimos que la pagina se refresque
	//traemos los datos a utilizar
	const img1 = document.getElementById('img1');
	const img2 = document.getElementById('img2');
	const img3 = document.getElementById('img3');
	const img4 = document.getElementById('img4');
	const img5 = document.getElementById('img5');	
	const eleccion1 = document.getElementById('selec1').checked;
	const eleccion2 = document.getElementById('selec2').checked;
	const eleccion3 = document.getElementById('selec3').checked;
	const eleccion4 = document.getElementById('selec4').checked;
	const eleccion5 = document.getElementById('selec5').checked;
	//transformamos los datos tomados del FILE para acceder a la URL de la imagen
	const archivos = img_edit.files;
	const resultado = archivos[0];
	const url = URL.createObjectURL(resultado);
	
	//preguntamos cual es la imagen (checkbox) seleccionado para cambiar la imagen
	if (eleccion1) {
		img1.src=url;
		respuesta.innerHTML = "<h6 class='alert alert-success' id='respuesta'>cambio exitoso</h6>";
	}
	else if (eleccion2) {
		img2.src=url;
		respuesta.innerHTML = "<h6 class='alert alert-success' id='respuesta'>cambio exitoso</h6>";
	}
	else if (eleccion3) {
		img3.src=url;
		respuesta.innerHTML = "<h6 class='alert alert-success' id='respuesta'>cambio exitoso</h6>";
	}
	else if (eleccion4) {
		img4.src=url;
		respuesta.innerHTML = "<h6 class='alert alert-success' id='respuesta'>cambio exitoso</h6>";
	}
	else if (eleccion5) {
		img5.src=url;
		respuesta.innerHTML = "<h6 class='alert alert-success' id='respuesta'>cambio exitoso</h6>";
	}
	else{
		respuesta.innerHTML = "<h6 class='alert alert-danger' id='respuesta'>Seleccione una imagen</h6>";
	}
});

