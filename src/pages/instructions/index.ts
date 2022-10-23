import { state } from "../../state";

export function initInstructionsPage(url) {
  const currentMoves = state.getMoves();

  const addInstructionsPage = document.createElement("div");
  addInstructionsPage.classList.add("starting-screen");
  addInstructionsPage.innerHTML = `
        <instructions-text text="Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos."></instructions-text>
        <blue-button class="button-jugar" text="¡Jugar!"></blue-button>
        <hands-comp></hands-comp>
      `;

  // TRAE EL ELEMENTO BUTTON-JUGAR
  const buttonJugar = addInstructionsPage.querySelector(
    ".button-jugar"
  ) as HTMLElement;

  // APLICA EL LISTENER
  buttonJugar.addEventListener("click", () => {
    url.goTo("/countdown");
    currentMoves.myMove = "";
  });

  return addInstructionsPage;
}
