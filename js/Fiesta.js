var intervalId;

    function startChangingColor() {
        intervalId = setInterval(changeColor, 300); // Cambia cada 2 segundos (2000 milisegundos)
    }

    function stopChangingColor() {
        clearInterval(intervalId); // Detiene el cambio de color
        resetColor(); // Restaura el color original
    }

    function changeColor() {
        var randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    }

    function resetColor() {
        document.body.style.backgroundColor = 'transparent'; // Restaura a fondo transparente
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }