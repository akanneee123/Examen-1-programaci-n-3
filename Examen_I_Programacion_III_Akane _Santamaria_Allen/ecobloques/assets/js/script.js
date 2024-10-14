document.getElementById('registrar-btn').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;

    // Aquí enviarías los datos a tu base de datos, por ejemplo con una API
    console.log(`Nombre: ${nombre}, Cédula: ${cedula}, Fecha de Nacimiento: ${fechaNacimiento}`);
    alert('Registro exitoso');
    // Luego puedes limpiar el formulario si lo deseas
});

document.getElementById('ingresar-btn').addEventListener('click', function() {
    const cedula = document.getElementById('cedula').value;

    // Aquí harías una validación de la cédula contra tu base de datos
    console.log(`Ingresando con Cédula: ${cedula}`);
    // Si la validación es correcta, redirigirías a la nueva pantalla
    window.location.href = 'nueva-pantalla.html';  // Redirigir al ingreso
});

document.getElementById('buscar-btn').addEventListener('click', function() {
    const cedula = document.getElementById('cedula').value;  // Obtiene el valor de la cédula ingresada

    // Verificar si el campo de cédula no está vacío
    if (cedula === '') {
        alert('Por favor, ingresa un número de cédula.');
        return;
    }

    // Realiza una solicitud POST al servidor Flask
    fetch('/buscar_usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cedula: cedula }),  // Envía el número de cédula en formato JSON
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            // Si no se encuentra la cédula, mostrar mensaje de error
            alert(data.error);
        } else {
            // Mostrar la información del usuario si se encuentra
            document.getElementById('nombre-usuario').textContent = data.nombre;
            document.getElementById('fecha-nacimiento-usuario').textContent = data.fecha_nacimiento;
            document.getElementById('cantidad-ecobloques').textContent = data.eco_bloques;

            // Mostrar la sección de información
            document.getElementById('info-usuario').classList.remove('info-oculta');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// Ejemplo de base de datos simulada de usuarios registrados
const usuariosRegistrados = {
    "123456789": {
        nombre: "Juan Pérez",
        fechaNacimiento: "1990-05-20",
        ecoBloques: 12
    },
    "987654321": {
        nombre: "María López",
        fechaNacimiento: "1985-11-15",
        ecoBloques: 20
    }
};

// Función para buscar al usuario por cédula
document.getElementById('buscar-btn').addEventListener('click', function() {
    const cedula = document.getElementById('cedula').value;
    
    // Verificar si la cédula está registrada en nuestra base de datos simulada
    if (usuariosRegistrados[cedula]) {
        // Mostrar la información del usuario
        const usuario = usuariosRegistrados[cedula];
        document.getElementById('nombre-usuario').textContent = usuario.nombre;
        document.getElementById('fecha-nacimiento-usuario').textContent = usuario.fechaNacimiento;
        document.getElementById('cantidad-ecobloques').textContent = usuario.ecoBloques;

        // Mostrar la sección de información
        document.getElementById('info-usuario').classList.remove('info-oculta');
    } else {
        alert('Cédula no registrada.');
    }
});

