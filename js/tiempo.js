//setTiemout (ejecuta una funcion una vez pasado tanto tiempo en mseg)

let contador = 1;

function saludar() {
    document.write("hola mundo<br>");
    contador++;
    if (contador == 4) {
        clearTimeout(tiempo)
    }
}

//window.setTimeout(saludar, 1500);

//setInternal (ejecuta una funcion indefinidamente pasado tanto tiempo, hasta que aplicamos clearTimeout)

let tiempo = window.setInterval(saludar, 1000);