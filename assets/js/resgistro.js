document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje');

    if (nombre && email && password && telefono) {
        mensaje.textContent = '¡Registro exitoso! Bienvenido a Sprint.';
        mensaje.style.color = 'green';
        this.reset();
    } else {
        mensaje.textContent = 'Por favor, completa todos los campos.';
        mensaje.style.color = 'red';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    logo.style.display = 'block';
    logo.style.opacity = 0;
    logo.style.transform = 'translateY(-20px)';

    setTimeout(() => {  
        logo.style.opacity = 1;
        logo.style.transform = 'translateY(0)';
    }   , 100);
});
