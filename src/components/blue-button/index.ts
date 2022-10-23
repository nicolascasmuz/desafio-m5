customElements.define(
  "blue-button",
  class extends HTMLElement {
    shadow: ShadowRoot;
    text: string;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      this.text = this.getAttribute("text") || "";

      const div = document.createElement("div");
      div.classList.add("blue-button__div");
      div.innerHTML = `
          <button class="blue-button__button">${this.text}</button>
        `;

      const style = document.createElement("style");
      style.innerHTML = `
        .blue-button__button {
        background-color: #006CFC;
        border: solid 10px #001997;
        border-radius: 10px;
        color: #D8FCFC;
        font-family: 'Odibee Sans', cursive;
        font-size: 45px;
        min-width: 322px;
        min-height: 87px;
        margin: 0;
        }
        `;

      this.shadow.appendChild(div);
      this.shadow.appendChild(style);
    }
  }
);
