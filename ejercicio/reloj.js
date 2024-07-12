


function tiempo() {
    let reloj = new Date();

    let hora = reloj.getHours();
    let minutos = reloj.getMinutes();
    let segundos = reloj.getSeconds();

    let horax = hora >= 12 ? 'PM' : 'am'


    hora = hora % 12;

    hora = hora ? hora : 12;




    let todo = `${hora}:${minutos}:${segundos}`


    document.getElementById('todo').innerHTML = todo;

    document.querySelector('em').innerHTML = horax;



    setInterval(tiempo, 1000)

}


tiempo();