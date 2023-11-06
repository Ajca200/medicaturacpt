//traemos los datos de los input del HTML
const error = document.getElementById('error');
const comprobar = document.getElementById('btn-formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const fecha = document.getElementById('fecha');
const clave = document.getElementById('contrasena');
const claveConfirmacion = document.getElementById('confirmacion');

const validacorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; //expresion regular para la validacion del correo electronico
let año = new Date().getFullYear();//año actual YYYY
let mes = new Date().getMonth();//mes actual MM
let dia = new Date().getDate();//dia actual DD
año -= 18;//le restamos 18años al año actual 
const fechaValida = new Date(`${año}-${mes+1}-${dia}`);//creamos una variable que almacene la fecha optenida YYYY-MM-DD

//creamos evento para cuando cargue la pagina
window.addEventListener('load', () => {
	//traemos los datos
	const label = document.querySelector('.label-formulario-nombre');
	const label2 = document.querySelector('.label-formulario-apellido');
	const label3 = document.querySelector('.label-formulario-correo');
	const label4 = document.querySelector('.label-formulario-clave');
	const label5 = document.querySelector('.label-formulario-confirmacion');
	const label6 = document.querySelector('.label-formulario-fecha');

	if (nombre.value !== "") { //condicional en caso de que el nombre no este vacio
	 	nombre.style.outline = 'none';
		label.style.transform = 'translateY(0px)';
	} 
	if (nombre.value === "") { //condicional en caso de que el nombre este vacio
	 	label.style.transform = 'translateY(30px)';
	}
	if (apellido.value !== "") { //condicional en caso de que el apellido no este vacio
		apellido.style.outline = 'none';
		label2.style.transform = 'translateY(0px)';
	} 
	if (apellido.value === "") { //condicional en caso de que el apellido este vacio
	 	label2.style.transform = 'translateY(30px)';
	}
	if (correo.value !== "") { //condicional en caso de que el correo no este vacio
		correo.style.outline = 'none';
		label3.style.transform = 'translateY(0px)';
	}
	if (correo.value === "") { //condicional en caso de que el correo este vacio
	 	label3.style.transform = 'translateY(30px)';
	}
	if (clave.value !== "") { //condicional en caso de que la clave no este vacio
		clave.style.outline = 'none';
		label4.style.transform = 'translateY(0px)';
	} 
	if (!fecha.value == "") { //condicional en caso de que la fecha no este vacio
		fecha.type = "date";
		label6.style.opacity = '0';
	}
	if (fecha.value == "") { //condicional en caso de que la fecha este vacio
		fecha.type = "text";
		label6.style.opacity = '1';
	}
	if (clave.value === "") { //condicional en caso de que la clave este vacio
	 	label4.style.transform = 'translateY(30px)';
	}
	if (claveConfirmacion.value !== "") { //condicional en caso de que la confirmacion no este vacio
		claveConfirmacion.style.outline = 'none';
		label5.style.transform = 'translateY(0px)';
	} 
	if (claveConfirmacion.value === "") { //condicional en caso de que la confirmacion este vacio
	 	label5.style.transform = 'translateY(30px)';
	}
});

// animacion del label de los input del HTML
nombre.addEventListener('focus',() => {
	const label = document.querySelector('.label-formulario-nombre');
	nombre.style.outline = 'none';
	label.style.transform = 'translateY(0px)';
});
apellido.addEventListener('focus',() => {
	const label = document.querySelector('.label-formulario-apellido');
	apellido.style.outline = 'none';
	label.style.transform = 'translateY(0px)';
});
correo.addEventListener('focus',() => {
	const label = document.querySelector('.label-formulario-correo');
	correo.style.outline = 'none';
	label.style.transform = 'translateY(0px)';
});
fecha.addEventListener('focus',() => {
	const label = document.querySelector('.label-formulario-fecha');
	fecha.type = "date";
	fecha.style.outline = 'none';
	label.style.opacity = '0';
});
clave.addEventListener('focus',() => {
	const label = document.querySelector('.label-formulario-clave');
	clave.style.outline = 'none';
	label.style.transform = 'translateY(0px)';
});
claveConfirmacion.addEventListener('focus',() => {
	const label = document.querySelector('.label-formulario-confirmacion');
	claveConfirmacion.style.outline = 'none';
	label.style.transform = 'translateY(0px)';
});

// validacion de datos

//validacion del nombre
nombre.addEventListener('blur',() => {
	//traemos los datos
	const label = document.querySelector('.label-formulario-nombre');
	const verificar = nombre.value.split("");

	//verificamos que en el nombre no haya un numero
	for (let i = 0; i < verificar.length; i++) {
		 	if (Number(verificar[i])) {
		 		error.classList.add('alert');
				error.classList.add('alert-danger');
				error.innerHTML="el nombre no puede contener numeros";
				nombre.style.borderBottom = 'solid 1px red';
				return false;
		 	}
		 }	 
	if (nombre.value === "") { //verificamos que nombre no este vacio
		label.style.transform = 'translateY(30px)';
		error.classList.add('alert');
		error.classList.add('alert-danger');
		error.innerHTML="Por favor llene todos los campos";
		nombre.style.borderBottom = 'solid 1px red';
	}
	else{
		if(nombre.value.length <= 6 || nombre.value.length >= 16){ //verificamos que el nombre cumpla la longitud planteada
			error.classList.add('alert');
			error.classList.add('alert-danger');
			error.innerHTML="el nombre de tener 6-16 caracteres ";
			nombre.style.borderBottom = 'solid 1px red';
		}
		else if(Number(nombre.value)){ //verificamos que el nombre no sean numeros
			error.classList.add('alert');
			error.classList.add('alert-danger');
			error.innerHTML="el nombre no puede contener numeros";
			nombre.style.borderBottom = 'solid 1px red';
		}
		else{
			error.classList.remove('alert');
			error.classList.remove('alert-danger');
			error.innerHTML="";
			nombre.style.borderBottom = 'solid 1px green';
		}
	}
});

//validacion del apellido
apellido.addEventListener('blur',() => {
	const label = document.querySelector('.label-formulario-apellido');
	const verificar = apellido.value.split("");

	for (let i = 0; i < verificar.length; i++) {
		 	if (Number(verificar[i])) {
		 		error.classList.add('alert');
				error.classList.add('alert-danger');
				error.innerHTML="el apellido no puede contener numeros";
				apellido.style.borderBottom = 'solid 1px red';
				return false;
		 	}
		 }
	if (apellido.value === "") {
		label.style.transform = 'translateY(30px)';
		error.classList.add('alert');
		error.classList.add('alert-danger');
		error.innerHTML="Por favor llene todos los campos";
		apellido.style.borderBottom = 'solid 1px red';
	} else{
		if (apellido.value.length <= 6 || apellido.value.length >= 16){
			error.classList.add('alert');
			error.classList.add('alert-danger');
			error.innerHTML="el apellido de tener 6-16 caracteres ";
			apellido.style.borderBottom = 'solid 1px red';
		} 
		else if(Number(apellido.value)){
			error.classList.add('alert');
			error.classList.add('alert-danger');
			error.innerHTML="el apellido no puede contener numeros";
			nombre.style.borderBottom = 'solid 1px red';
		} else{
			error.classList.remove('alert');
			error.classList.remove('alert-danger');
			error.innerHTML="";
			apellido.style.borderBottom = 'solid 1px green';
		}
	}
});

//validacion del correo electonico
correo.addEventListener('blur', () => {
	const label = document.querySelector('.label-formulario-apellido');

	if (correo.value === "") { //verificamos que el correo no este vacio 
		label.style.transform = 'translateY(30px)';
		error.classList.add('alert');
		error.classList.add('alert-danger');
		error.innerHTML="llene todos los campos";
		apellido.style.borderBottom = 'solid 1px red';
	} else {
		if (!validacorreo.test(correo.value)) { // verificamos que el correo sea valido usando la expresion regular
			error.classList.add('alert');
			error.classList.add('alert-danger');
			error.innerHTML="Por favor ingrese un correo valido";
			correo.style.borderBottom = 'solid 1px red';
		} else{
			error.classList.remove('alert');
			error.classList.remove('alert-danger');
			error.innerHTML="";
			correo.style.borderBottom = 'solid 1px green';
		}
	}
});
//validacion de la fecha
fecha.addEventListener('blur', () => {
	const label = document.querySelector('.label-formulario-fecha');
	if (fecha.value == "") { //verificamos que la fecha no este vacia
		fecha.type = "text";
		label.style.opacity = '1';
	} else {
		if (Date.parse(fecha.value) > Date.parse(fechaValida)) { //validamos que los datos cumplan la condicion
			error.classList.add('alert');
			error.classList.add('alert-danger');
			error.innerHTML="Debes ser mayor de edad";
			fecha.style.borderBottom = 'solid 1px red';
		} else{
			error.classList.remove('alert');
			error.classList.remove('alert-danger');
			error.innerHTML="";
			fecha.style.borderBottom = 'solid 1px green';
		}
	}
});
//validacion de la clave
clave.addEventListener('blur', () => {
	const label = document.querySelector('.label-formulario-clave');
	if (clave.value === "") { //verificamos que la clave no este vacia
		label.style.transform = 'translateY(30px)';
		error.classList.add('alert');
		error.classList.add('alert-danger');
		error.innerHTML="Por favor llene todos los campos";
		clave.style.borderBottom = 'solid 1px red';
	} else {
		//validamos la clave usando una expresion regular
		if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/.test(clave.value)){
			error.classList.add('alert');
			error.classList.add('alert-danger');
			error.innerHTML="Su clave debe tener Mayusculas, minusculas, numeros y caracteres especiales";
			clave.style.borderBottom = 'solid 1px red';
		}
		//validamos que la clave cumpla con la longitud necesaria
		else if (clave.value.length < 8 || clave.value.length > 16) {
			error.classList.add('alert');
			error.classList.add('alert-danger');
			error.innerHTML="su clave de tener 8-16 caracteres ";
			clave.style.borderBottom = 'solid 1px red';
		}
		else{
			error.classList.remove('alert');
			error.classList.remove('alert-danger');
			error.innerHTML="";
			clave.style.borderBottom = 'solid 1px green';
		}
	}
});
// validacion de la confirmacion
claveConfirmacion.addEventListener('blur', () => {
	const label = document.querySelector('.label-formulario-confirmacion');
	if (claveConfirmacion.value === "") { //verificamos que la confirmacion no este vacia 
		label.style.transform = 'translateY(30px)';
		error.classList.add('alert');
		error.classList.add('alert-danger');
		error.innerHTML="Por favor llene todos los campos";
		claveConfirmacion.style.borderBottom = 'solid 1px red';
	} else {
		//validamos que la confirmacion sea igual a la clave indicada
		if (claveConfirmacion.value !== clave.value) {
			error.classList.add('alert');
			error.classList.add('alert-danger');
			error.innerHTML="Las claves no coinciden";
			claveConfirmacion.style.borderBottom = 'solid 1px red';
		} else{
			error.classList.remove('alert');
			error.classList.remove('alert-danger');
			error.innerHTML="";
			claveConfirmacion.style.borderBottom = 'solid 1px green';
		}
	}
});
// Comprobamos
comprobar.addEventListener('click', (e) => {
	e.preventDefault(); //prevenimos que la pagina se refresque
	//verificamos que ningun input haya quedado vacio
	if(nombre.value === "" || apellido.value === ""	|| correo.value === "" || fecha.value === "" || clave.value ==="" || claveConfirmacion.value === ""){
		error.classList.add('alert');
		error.classList.add('alert-danger');
		error.innerHTML="Por favor llene todos los campos";
	} else {
		//verificamos nuevamente todos los datos
		if (nombre.value.length < 7 && nombre.value.length > 16 && apellido.value.length < 7 && Number(nombre.value) && Number(apellido.value) && apellido.value.length > 16 && !validacorreo.test(correo.value) && Date.parse(fecha.value) > Date.parse(fechaValida) && clave.value.length < 8 && clave.value.length > 16 && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/.test(clave.value) && claveConfirmacion.value !== clave.value) {
			error.classList.add('alert');
			error.classList.add('alert-danger');
			error.innerHTML="Por favor verifique los datos e intente nuevamente";
			
		} else {
			error.classList.add('alert');
			error.classList.add('alert-success');
			error.innerHTML="Usuario Registrado";
			setTimeout(() => {
				alert('USUARIO REGISTRADO EXITOSAMENTE');
				//nos redirimos a la sub-pagina (LOGIN)
				window.location.href="./login.html";
			}, 1000);
		}
	}
});