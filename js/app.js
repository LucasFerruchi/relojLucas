function obtenerHora() {
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

    let pHoras = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pNumDia = document.getElementById('numDia'),
        pMes = document.getElementById('mes'),
        pYear = document.getElementById('year');

    let semanas = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    pDiaSemana.innerHTML = semanas[fecha.getDay()];

    pNumDia.innerHTML = fecha.getDate();

    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pMes.innerHTML = meses[fecha.getMonth()];

    pYear.innerHTML = fecha.getFullYear();

    //asignar horas, min, segundos
    if (horas < 10) {
        horas = '0' + horas;
    }

    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    if (segundos < 10) {
        segundos = '0' + segundos;
    }


    pHoras.innerHTML = horas;
    pMinutos.innerHTML = minutos;
    pSegundos.innerHTML = segundos;
}


function cambiarColor(color) {
    let section = document.getElementsByTagName("section");
    console.log(section);

    if (color == "verde") {
        section[0].className = "w-75 green";
    }

    if (color == "azul") {
        section[0].className = "w-75 blue";
    }

    if (color == "rosa") {
        section[0].className = "w-75 pink";
    }

}


//function cambiarColorB() {
//    let section = document.getElementsByTagName("section");
//    console.log(section);
//    section[0].className = "w-75 blue"
//}
//
//function cambiarColorG() {
//    let section = document.getElementsByTagName("section");
//    console.log(section);
//    section[0].className = "w-75 green"
//}
//
//function cambiarColorP() {
//    let section = document.getElementsByTagName("section");
//    console.log(section);
//    section[0].className = "w-75 pink"
//}

window.setInterval(obtenerHora, 1000);