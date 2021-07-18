const datos = {
    nombres : '',
    apellidos : '',    
    correo : '',
    mensaje : ''
}

// Eventos de los inputs y textarea
const nombres = document.querySelector('#nombres');
const apellidos = document.querySelector('#apellidos');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');

nombres.addEventListener('input', leerTexto);
apellidos.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// Evento submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    
    // Validar el formunario
    const { nombres, apellidos, correo, mensaje} = datos;

    if(nombres === ''){
        mostrarAlerta('El nombre está vacío.', 'error');
        return;
    }else if(apellidos === ''){
        mostrarAlerta('El apellido está vacío.', 'error');
        return;
    }else if(correo === ''){
        mostrarAlerta('El correo está vacío.', 'error');
        return;
    }else if(mensaje === ''){
        mostrarAlerta('El mensaje está vacío.', 'error');
        return;
    }else{
        // Enviar el formulario
        mostrarAlerta('El mensaje se está enviando correctamente.');
        setTimeout(() => {            
            mostrarDatos();            
        }, 5000);
    }    
});

function leerTexto(e){
    datos[e.target.id] =  e.target.value;    
}
// Mostrar datos al enviar el mensaje
function mostrarDatos(){
    cadena = "Nombres: " + datos.nombres + "\nApellidos: " + datos.apellidos +
    "\nCorreo: " + datos.correo + "\nMensaje: " + datos.mensaje;
    alert(cadena);
    setTimeout(() => {
        formulario.submit();
    }, 3000);
}
// Mostrar alerta
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaparecer después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

