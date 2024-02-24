// Botones de scroll
var scrollButtons = document.getElementById('scroll-buttons');
var toggleButton = document.getElementById('toggle-scroll-buttons');
var scrollUpButton = document.getElementById('scroll-up-btn');
var scrollDownButton = document.getElementById('scroll-down-btn');
var scrollButtonsVisible = false;

toggleButton.addEventListener('click', function() {
    scrollButtonsVisible = !scrollButtonsVisible
    if (scrollButtonsVisible) {
        scrollButtons.style.display = 'none';
    } else {
        scrollButtons.style.display = 'block';
    }
});

scrollUpButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave hacia arriba
    });
});


scrollDownButton.addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Desplazamiento suave hacia abajo
    });
});

// Eventos de mouse
document.getElementById('left-click-btn').addEventListener('click', function() {
    alert('Click izquierdo');
});

document.getElementById('right-click-btn').addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Click derecho');
});

document.getElementById('double-click-btn').addEventListener('dblclick', function() {
    alert('Doble click');
});