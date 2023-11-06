//traemos lo datos
const input_usuario = document.querySelector('.usuario');
const input_clave = document.querySelector('.password');
const label_usuario = document.getElementById('nombre_usuario');
const label_clave = document.getElementById('nombre_clave');
const enviar = document.getElementById('btn');

//agregamos evento a las etiquetas label (animacion)
input_usuario.addEventListener('focus', () => {
	label_usuario.classList.add('usuario_focus');
});
//agregamos evento a las etiquetas label (animacion)
input_usuario.addEventListener('blur', () => {
	if (input_usuario.value === "") {
		label_usuario.classList.remove('usuario_focus');
	}
});
//agregamos evento a las etiquetas label (animacion)
input_clave.addEventListener('focus', () => {
	label_clave.classList.add('clave_focus');
});
//agregamos evento a las etiquetas label (animacion)
input_clave.addEventListener('blur', () => {
	if (input_clave.value === "") {
		label_clave.classList.remove('clave_focus');
	}
});

//agregamos evento (click) para la validacion de los datos
enviar.addEventListener('click', () => {
	//traemos los datos de los input a validar
	const usuario = document.querySelector('.usuario').value;
	const clave = document.querySelector('.password').value;
	const error = document.getElementById('error');

	if (usuario === "" && clave === ""){ //verificamos que no esten vacios
		error.innerHTML='<h4 class="alert alert-danger">llene todos los campos</h4>';
	}
	else {
		if (usuario != "abrahancolmenares022@gmail.com" && usuario != "cptmedicatura@gmail.com") { //verificamos que sean correctos los correos electronicos
			error.innerHTML='<h4 class="alert alert-danger">usuario invalido</h4>';
		}
		else{
			if (clave == "1234" && usuario == "abrahancolmenares022@gmail.com") { //verificamos que el correo y clave sean correctos
			    alert('BIENVENIDO');
			    window.location.href = "./inicio-desarrollador.html"; //redirigimos a la pagina destino
			}
			else if (clave == "CPT3.2023" && usuario == "cptmedicatura@gmail.com") { //verificamos que el correo y clave sean correctos
				alert('BIENVENIDO');
				window.location.href = "./inicio-medicos.html";//redirigimos a la pagina destino
			}
			else{
				error.innerHTML='<h4 class="alert alert-danger">clave o usuario invalida</h4>';
			}
		}
	}
});