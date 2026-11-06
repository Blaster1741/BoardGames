import Juego from "./modelos/Juego.js";

$(document).ready(function () {
  // Redirect to setup if player data is missing
  if (!localStorage.getItem("phpoly_players")) {
    window.location.href = "reinicio.html";
    return;
  }

  let juego = new Juego();

  let border = "0em 0em 0em 0.5em #ffffff95";
  document.getElementsByClassName("tarjeta")[0].style.boxShadow = border;

  // Listen for completed dice rolls
  document.addEventListener("diceRolled", function (e) {
    let rollValue = e.detail;
    if (!isNaN(rollValue)) {
      Juego.SiguienteTurno(juego, rollValue);
    }
  });

  $("#comprar").click(function () {
    Juego.comprar(juego);
  });
  
  $("#pasar").click(function () {
    Juego.pasar(juego);
  });
});