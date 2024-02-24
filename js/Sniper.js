var x = 0; // Coordenada X
        var y = 0; // Coordenada Y
        var mueve = false; // Variable que indica si estamos arrastrando o no

        function iniciar(){
            /* En este método guardamos las coordenadas iniciales de la posición del puntero del ratón */
            mueve = !mueve;
        }

        function mostrarCoordenadas(){
            if(mueve){
                /* Si estamos arrastrando, actualizamos las coordenadas */
                [x,y] = [event.clientX, event.clientY];
            }
            
            document.getElementById("coordenadas").innerHTML = "Coordenadas: "+x+", "+y;
        }

        /* Añadimos un evento que se ejecutará cada vez que se mueva el ratón */
        addEventListener('mousemove',mostrarCoordenadas);