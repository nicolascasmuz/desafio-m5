export function initStartPage(url) {
  const addStartPage = document.createElement("div");
  addStartPage.classList.add("starting-screen");
  addStartPage.innerHTML = `
      <main-title title="Piedra Papel o Tijera"></main-title>
      <blue-button class="button-start" text="Empezar"></blue-button>
      <hands-comp></hands-comp>
    `;

  const buttonStartEl = addStartPage.querySelector(
    ".button-start"
  ) as HTMLElement;

  buttonStartEl.addEventListener("click", () => {
    url.goTo("/desafio-m5/instructions");
  });

  return addStartPage;
}
