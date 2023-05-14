/* FORMULARIO*/

const formulario = document.querySelector('.formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const domicilio = document.getElementById('domicilio');
const provincia = document.getElementById('provincia');
const localidad = document.getElementById('localidad');
const mensaje = document.getElementById('mensaje');
const contactarEmail = document.getElementById('contactarEmail');
const contactarTelefono = document.getElementById('contactarTelefono');
const fecha = document.getElementById('fecha');
const hora = document.getElementById('hora');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    if (nombre.value.trim() === '') {
        mostrarError(nombre, 'El nombre es obligatorio');
        console.log(nombre)
    } else {
        removerError(nombre);
    }

    if (email.value.trim() === '') {
        mostrarError(email, 'El correo electrónico es obligatorio');
    } else if (!esCorreoValido(email.value)) {
        mostrarError(email, 'El correo electrónico no es válido');
    } else {
        removerError(email);
    }

    if (telefono.value.trim() === '') {
        mostrarError(telefono, 'El teléfono es obligatorio');
    } else if (!esNumeroValido(telefono.value)) {
        mostrarError(telefono, 'El teléfono debe contener solo números');
    } else {
        removerError(telefono);
    }

    if (domicilio.value.trim() === '') {
        mostrarError(domicilio, 'El domicilio es obligatorio');
    } else {
        removerError(domicilio);
    }

    if (provincia.value === '') {
        mostrarError(provincia, 'La provincia es obligatoria');
    } else {
        removerError(provincia);
    }

    if (localidad.value.trim() === '') {
        mostrarError(localidad, 'La localidad es obligatoria');
    } else {
        removerError(localidad);
    }

    if (mensaje.value.trim() === '') {
        mostrarError(mensaje, 'El mensaje es obligatorio');
    } else {
        removerError(mensaje);
    }

    if (!contactarEmail.checked && !contactarTelefono.checked) {
        mostrarError(contactarEmail, 'Debe seleccionar una opción');
    } else {
        removerError(contactarEmail);
    }

    if (fecha.value === '') {
        mostrarError(fecha, 'La fecha es obligatoria');
    } else {
        removerError(fecha);
    }

    if (hora.value === '') {
        mostrarError(hora, 'La hora es obligatoria');
    } else {
        removerError(hora);
    }

    const errores = formulario.querySelectorAll('.error');
    if (errores.length === 0) {
        const exito = document.createElement('div');
        exito.classList.add('exito');
        exito.innerText = 'El formulario fue enviado exitosamente';
        formulario.appendChild(exito);

        setTimeout(() => {
            formulario.removeChild(exito);
        }, 3000);
    }

    formulario.reset();
}

function mostrarError(input, mensaje) {
    const padre = input.parentElement;
    const errorMensaje = padre.querySelector('p');
    errorMensaje.innerText = mensaje;
    padre.classList.add('error');
    // console.log(errorMensaje)
}

function removerError(input) {
    const padre = input.parentElement;
    const errorMensaje = padre.querySelector('p');
    errorMensaje.innerText = '';
    padre.classList.remove('error');
}

function esCorreoValido(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}

function esNumeroValido(numero) {
    const expresion = /^\d+$/;
    return expresion.test(numero);
}

