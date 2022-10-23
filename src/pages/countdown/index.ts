export function initCountdownPage(url) {
  const addCountdownPage = document.createElement("div");
  addCountdownPage.classList.add("countdown-screen");
  addCountdownPage.innerHTML = `
        <countdown-comp></countdown-comp>
        <piedra-papel-tijera class="countdown__hands"></piedra-papel-tijera>
    `;

  setTimeout(function () {
    url.goTo("/move");
  }, 3000);

  return addCountdownPage;
}
