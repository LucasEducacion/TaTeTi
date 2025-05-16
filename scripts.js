let celda = document.getElementsByClassName('celda');
let jUno = true;
let gano = false;

for (let i = 0; i < celda.length; i++) {
    celda[i].addEventListener('click', userMove);
}

function userMove(e) {
    let valorCelda = e.target.innerHTML;
    if (!valorCelda.length) {
        e.target.innerHTML = jUno ? 'X' : 'O'
        jUno = !jUno;

        mirarGanador(0, 1, 2);
        mirarGanador(3, 4, 5);
        mirarGanador(6, 7, 8);
        mirarGanador(0, 3, 6);
        mirarGanador(1, 4, 7);
        mirarGanador(2, 5, 8);
        mirarGanador(0, 4, 8);
        mirarGanador(2, 4, 6);

        let empate = true;
        for (let i = 0; i < celda.length; i++)
            if (!celda[i].innerHTML.length) {
                empate = false;
            }
        if (empate && !gano) {
            alert('Empate');
            reiniciarJuego();
        }
    }

}

function mirarGanador(c1, c2, c3) {
    if (celda[c1].innerHTML.length && celda[c1].innerHTML == celda[c2].innerHTML && celda[c1].innerHTML == celda[c3].innerHTML) {
        mostrarGanador(celda[c1].innerHTML);
    }
}

function mostrarGanador(c1) {
    if (c1 == 'X')
        alert('Gana jugador 1');
    else
        alert('Gana jugador dos');
    gano = true;
    reiniciarJuego();
}

function reiniciarJuego() {
    for (let i = 0; i < celda.length; i++) {
        celda[i].innerHTML = '';
    }
    gano = false;
    jUno = true;
}