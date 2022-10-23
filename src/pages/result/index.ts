const resultGreenStarImg = require("url:../../resources/Star-1.png");
const resultRedStarImg = require("url:../../resources/Star-2.png");
const resultYellowStarImg = require("url:../../resources/Star-3.png");
import { state } from "../../state";

export function initResultPage(url) {
  const currentMoves = state.getMoves();

  const addResultPage = document.createElement("div");

  if (
    (currentMoves.cpuMove == "piedra" && currentMoves.myMove == "piedra") ||
    (currentMoves.cpuMove == "papel" && currentMoves.myMove == "papel") ||
    (currentMoves.cpuMove == "tijera" && currentMoves.myMove == "tijera")
  ) {
    addResultPage.classList.add("result-page-draw__screen");
    addResultPage.innerHTML = `
        <result-star text="Empate" img="${resultYellowStarImg}"></result-star>
        <result-chart title="Score" my-result="${state.getUserWins()}" cpu-result="${state.getCPUWins()}"></result-chart>
        <blue-button class="result-page-button" text="Volver a jugar"></blue-button>
      `;

    // TRAE EL ELEMENTO BLUE-BUTTON
    const buttonStartEl = addResultPage.querySelector(
      ".result-page-button"
    ) as HTMLElement;

    // APLICA EL LISTENER
    buttonStartEl.addEventListener("click", () => {
      url.goTo("/countdown");
      currentMoves.myMove = "";
    });

    return addResultPage;
  }
  if (
    (currentMoves.cpuMove == "piedra" && currentMoves.myMove == "tijera") ||
    (currentMoves.cpuMove == "papel" && currentMoves.myMove == "piedra") ||
    (currentMoves.cpuMove == "tijera" && currentMoves.myMove == "papel")
  ) {
    addResultPage.classList.add("result-page-cpu-wins__screen");
    addResultPage.innerHTML = `
        <result-star text="Perdiste" img="${resultRedStarImg}"></result-star>
        <result-chart title="Score" my-result="${state.getUserWins()}" cpu-result="${state.getCPUWins()}"></result-chart>
        <blue-button class="result-page-button" text="Volver a jugar"></blue-button>
      `;

    const buttonStartEl = addResultPage.querySelector(
      ".result-page-button"
    ) as HTMLElement;

    buttonStartEl.addEventListener("click", () => {
      url.goTo("/countdown");
      currentMoves.myMove = "";
    });

    return addResultPage;
  }
  if (
    (currentMoves.cpuMove == "tijera" && currentMoves.myMove == "piedra") ||
    (currentMoves.cpuMove == "papel" && currentMoves.myMove == "tijera") ||
    (currentMoves.cpuMove == "piedra" && currentMoves.myMove == "papel")
  ) {
    addResultPage.classList.add("result-page-user-wins__screen");
    addResultPage.innerHTML = `
        <result-star text="Ganaste" img="${resultGreenStarImg}"></result-star>
        <result-chart title="Score" my-result="${state.getUserWins()}" cpu-result="${state.getCPUWins()}"></result-chart>
        <blue-button class="result-page-button" text="Volver a jugar"></blue-button>
      `;

    const buttonStartEl = addResultPage.querySelector(
      ".result-page-button"
    ) as HTMLElement;

    buttonStartEl.addEventListener("click", () => {
      url.goTo("/countdown");
      currentMoves.myMove = "";
    });

    return addResultPage;
  }
}
