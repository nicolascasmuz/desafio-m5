customElements.define(
  "countdown-comp",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const div = document.createElement("div");

      div.innerHTML = `
        <div class="countdown__container">
          <div class="countdown__loading-container">
            <div class="countdown__loading-circle"></div>
          </div>
          <span id="countdown__span"></span>
        </div>
      `;

      const style = document.createElement("style");
      style.innerHTML = `
        .countdown__container {
          position: relative;
          margin: 125px auto;
        }
        .countdown__loading-container {
          display: grid;
          justify-content: center;
          width: 243px;
          height: 243px;
          transition: all 1s ease;
          z-index: 10000;
        }
        .countdown__loading-circle {
          border: 15px solid #000000;
          width: 243px;
          height: 243px;
          border-radius: 100%;
          
          animation: girar 1.0s linear infinite;
        }
        #countdown__span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #000000;
          font-family: "American Typewriter Bold";
          font-size: 100px;
        }

        @keyframes girar {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `;

      this.shadow.appendChild(div);
      this.shadow.appendChild(style);

      var initCount = 3;

      (function doCount() {
        const numberEl = div.querySelector("#countdown__span") as HTMLElement;
        numberEl.textContent = `${initCount}`;

        if (initCount == 0) {
          numberEl.textContent = "0";
        } else {
          initCount--;
          setTimeout(doCount, 1000);
        }
      })();
    }
  }
);
