customElements.define(
  "instructions-text",
  class extends HTMLElement {
    shadow: ShadowRoot;
    text: string;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      this.title = this.getAttribute("text") || "";

      const div = document.createElement("div");
      div.classList.add("main-title__div");
      div.innerHTML = `
        <p class="main-title__p">${this.title}</p>
      `;

      const style = document.createElement("style");
      style.innerHTML = `
        .main-title__div {
        width: 294px;
        height: 204px;
        }
        .main-title__p {
        color: #000000;
        font-family: "American Typewriter Regular";
        font-size: 40px;
        line-height: 40px;
        text-align: center;
        margin: 0;
        }
        `;

      this.shadow.appendChild(div);
      this.shadow.appendChild(style);
    }
  }
);
