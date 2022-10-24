const piedraImg = require("url:../../resources/piedra-move.png");
const papelImg = require("url:../../resources/papel-move.png");
const tijeraImg = require("url:../../resources/tijera-move.png");
import { state } from "../../state";

export function initMovePage(url) {
  const currentMoves = state.getMoves();

  // EL currentMoves.myMove = "" DE LOS LISTENERS DE BLUE-BUTTON
  // ERAN PARA RESETEAR EL RESULTADO Y REPETIR EL COUNTDOWN EN
  // CASO DE QUE NO SE HAYA EJECUTADO NINGUNA JUGADA.
  if (currentMoves.myMove == "") {
    setTimeout(function () {
      url.goTo("/instructions");
    }, 0);
  } else {
    setTimeout(function () {
      url.goTo("/result");
    }, 3000);
  }

  const addMovePage = document.createElement("div");
  addMovePage.classList.add("move-screen");
  const style = document.createElement("style");

  style.innerHTML = `
    .top-hand {
        width: 156px;
        height: 312px;
        -webkit-transform: rotate(-180deg);
        -moz-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }
    .bottom-hand {
        width: 156px;
        height: 312px;
        align-self: flex-end;
    }
    `;

  if (currentMoves.cpuMove == "piedra" && currentMoves.myMove == "piedra") {
    addMovePage.innerHTML = `
          <img class="top-hand" src=${piedraImg}></img>
          <img class="bottom-hand" src=${piedraImg}></img>
        `;

    addMovePage.appendChild(style);
    return addMovePage;
  }
  if (currentMoves.cpuMove == "papel" && currentMoves.myMove == "papel") {
    addMovePage.innerHTML = `
          <img class="top-hand" src=${papelImg}></img>
          <img class="bottom-hand" src=${papelImg}></img>
        `;

    addMovePage.appendChild(style);
    return addMovePage;
  }
  if (currentMoves.cpuMove == "tijera" && currentMoves.myMove == "tijera") {
    addMovePage.innerHTML = `
          <img class="top-hand" src=${tijeraImg}></img>
          <img class="bottom-hand" src=${tijeraImg}></img>
        `;

    addMovePage.appendChild(style);
    return addMovePage;
  }
  if (currentMoves.cpuMove == "piedra" && currentMoves.myMove == "tijera") {
    addMovePage.innerHTML = `
          <img class="top-hand" src=${piedraImg}></img>
          <img class="bottom-hand" src=${tijeraImg}></img>
        `;

    addMovePage.appendChild(style);
    return addMovePage;
  }
  if (currentMoves.cpuMove == "papel" && currentMoves.myMove == "piedra") {
    addMovePage.innerHTML = `
          <img class="top-hand" src=${papelImg}></img>
          <img class="bottom-hand" src=${piedraImg}></img>
        `;

    addMovePage.appendChild(style);
    return addMovePage;
  }
  if (currentMoves.cpuMove == "tijera" && currentMoves.myMove == "papel") {
    addMovePage.innerHTML = `
          <img class="top-hand" src=${tijeraImg}></img>
          <img class="bottom-hand" src=${papelImg}></img>
        `;

    addMovePage.appendChild(style);
    return addMovePage;
  }
  if (currentMoves.cpuMove == "tijera" && currentMoves.myMove == "piedra") {
    addMovePage.innerHTML = `
          <img class="top-hand" src=${tijeraImg}></img>
          <img class="bottom-hand" src=${piedraImg}></img>
        `;

    addMovePage.appendChild(style);
    return addMovePage;
  }
  if (currentMoves.cpuMove == "papel" && currentMoves.myMove == "tijera") {
    addMovePage.innerHTML = `
          <img class="top-hand" src=${papelImg}></img>
          <img class="bottom-hand" src=${tijeraImg}></img>
        `;

    addMovePage.appendChild(style);
    return addMovePage;
  }
  if (currentMoves.cpuMove == "piedra" && currentMoves.myMove == "papel") {
    addMovePage.innerHTML = `
          <img class="top-hand" src=${piedraImg}></img>
          <img class="bottom-hand" src=${papelImg}></img>
        `;

    addMovePage.appendChild(style);
    return addMovePage;
  }
}
