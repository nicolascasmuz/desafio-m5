function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequire9acc;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire9acc=s),s.register("27Lyk",(function(t,n){var i,s;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>s),(e=>s=e));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("27Lyk").register(JSON.parse('{"dZpbI":"index.e075c6d3.js","9dSVx":"piedra.2312c16f.png","kHHj3":"papel.343f43f3.png","6X6w9":"tijera.ad4321ba.png","fzTVb":"piedra-move.43245989.png","jVuCD":"papel-move.521b18f1.png","ji1Wp":"tijera-move.03e76989.png","2IscL":"Star-1.f96084ed.png","bT38Q":"Star-2.b1e0f3af.png","6og9f":"Star-3.38fa69cd.png"}')),customElements.define("main-title",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.title=this.getAttribute("title")||"";const e=document.createElement("div");e.classList.add("main-title__div"),e.innerHTML=`\n        <h1 class="main-title__h1">${this.title}</h1>\n      `;const t=document.createElement("style");t.innerHTML='\n        .main-title__div {\n        width: 294px;\n        height: 204px;\n        }\n        .main-title__h1 {\n        color: #009048;\n        font-family: "American Typewriter Bold";\n        font-size: 75px;\n        line-height: 70.48px;\n        margin: 0;\n        }\n        ',this.shadow.appendChild(e),this.shadow.appendChild(t)}}),customElements.define("blue-button",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.text=this.getAttribute("text")||"";const e=document.createElement("div");e.classList.add("blue-button__div"),e.innerHTML=`\n          <button class="blue-button__button">${this.text}</button>\n        `;const t=document.createElement("style");t.innerHTML="\n        .blue-button__button {\n        background-color: #006CFC;\n        border: solid 10px #001997;\n        border-radius: 10px;\n        color: #D8FCFC;\n        font-family: 'Odibee Sans', cursive;\n        font-size: 45px;\n        min-width: 322px;\n        min-height: 87px;\n        margin: 0;\n        }\n        ",this.shadow.appendChild(e),this.shadow.appendChild(t)}});var r;r=new URL(s("27Lyk").resolve("9dSVx"),import.meta.url).toString();var a;a=new URL(s("27Lyk").resolve("kHHj3"),import.meta.url).toString();var o;o=new URL(s("27Lyk").resolve("6X6w9"),import.meta.url).toString(),customElements.define("hands-comp",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("div");e.classList.add("piedra-papel-tijera__div"),e.innerHTML=`\n            <img class="piedra__img" src="${r}" /img>\n            <img class="papel__img" src="${a}" /img>\n            <img class="tijera__img" src="${o}" /img>\n          `;const t=document.createElement("style");t.innerHTML="\n        img {\n          align-self: flex-end;\n        }\n          .piedra-papel-tijera__div {\n          display: flex;\n          gap: 46px;\n          }\n          ",this.shadow.appendChild(e),this.shadow.appendChild(t)}});const l={data:{currentGame:{myMove:"",cpuMove:""},history:[]},listeners:[],init(){const e=localStorage.getItem("saved-state");this.setState(JSON.parse(e))},getState(){return this.data},setState(e){this.data=e;for(const t of this.listeners)t(e);localStorage.setItem("saved-state",JSON.stringify(e))},subscribe(e){this.listeners.push(e)},getMoves(){return this.getState().currentGame},setMoves(e){const t=this.getState();t.currentGame.myMove=e;const n=["piedra","papel","tijera"],i=n[Math.floor(Math.random()*n.length)];t.currentGame.cpuMove=i,this.getWinner(e,i),this.setState(t)},getWinner(e,t){const n=this.getState();("piedra"==e&&"piedra"==t||"papel"==e&&"papel"==t||"tijera"==e&&"tijera"==t)&&n.history.push("draw"),("piedra"==e&&"tijera"==t||"papel"==e&&"piedra"==t||"tijera"==e&&"papel"==t)&&n.history.push("user"),("tijera"==e&&"piedra"==t||"papel"==e&&"tijera"==t||"piedra"==e&&"papel"==t)&&n.history.push("cpu"),this.setState(n)},getUserWins(){return this.getState().history.filter((e=>"user"==e)).length},getCPUWins(){return this.getState().history.filter((e=>"cpu"==e)).length}};customElements.define("piedra-papel-tijera",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render(),this.makeAMove()}render(){const e=document.createElement("div");e.classList.add("piedra-papel-tijera__div"),e.innerHTML=`\n            <img class="piedra__img" src="${r}" /img>\n            <img class="papel__img" src="${a}" /img>\n            <img class="tijera__img" src="${o}" /img>\n          `;const t=document.createElement("style");t.innerHTML="\n        img {\n          align-self: flex-end;\n        }\n          .piedra-papel-tijera__div {\n          display: flex;\n          gap: 46px;\n          }\n          ",this.shadow.appendChild(e),this.shadow.appendChild(t)}makeAMove(){const e=this.shadow.querySelector(".piedra-papel-tijera__div"),t=this.shadow.querySelector(".piedra__img"),n=this.shadow.querySelector(".papel__img"),i=this.shadow.querySelector(".tijera__img");t.addEventListener("click",(()=>{l.setMoves("piedra"),e.style.gap="32px",n.style.opacity="0.5",i.style.opacity="0.5",t.style.height="200px",n.style.height="100px",i.style.height="100px"})),n.addEventListener("click",(()=>{l.setMoves("papel"),e.style.gap="32px",t.style.opacity="0.5",i.style.opacity="0.5",n.style.height="200px",t.style.height="100px",i.style.height="100px"})),i.addEventListener("click",(()=>{l.setMoves("tijera"),e.style.gap="32px",n.style.opacity="0.5",t.style.opacity="0.5",i.style.height="200px",n.style.height="100px",t.style.height="100px"}))}}),customElements.define("instructions-text",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.title=this.getAttribute("text")||"";const e=document.createElement("div");e.classList.add("main-title__div"),e.innerHTML=`\n        <p class="main-title__p">${this.title}</p>\n      `;const t=document.createElement("style");t.innerHTML='\n        .main-title__div {\n        width: 294px;\n        height: 204px;\n        }\n        .main-title__p {\n        color: #000000;\n        font-family: "American Typewriter Regular";\n        font-size: 40px;\n        line-height: 40px;\n        text-align: center;\n        margin: 0;\n        }\n        ',this.shadow.appendChild(e),this.shadow.appendChild(t)}}),customElements.define("result-star",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.text=this.getAttribute("text")||"",this.img=this.getAttribute("img")||"";const e=document.createElement("div");e.classList.add("result-star__div"),e.innerHTML=`\n      <img class="result-star__img" src="${this.img}"/>\n      <h2 class="result-star__h2">${this.text}</h2>\n      `;const t=document.createElement("style");t.innerHTML="\n        .result-star__div {\n          position: relative;\n          display: inline-block;\n          text-align: center;\n        }\n        .result-star__img {\n        width: 254px;\n        height: 259px;\n        }\n        .result-star__h2 {\n          color: #FFFFFF;\n          font-family: 'Odibee Sans', cursive;          \n          font-size: 55px;\n          font-weight: 400;\n          line-height: 61px;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          margin: 0;\n        }\n        ",this.shadow.appendChild(e),this.shadow.appendChild(t)}}),customElements.define("result-chart",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.title=this.getAttribute("title")||"",this.myResult=this.getAttribute("my-result")||"",this.cpuResult=this.getAttribute("cpu-result")||"";const e=document.createElement("div");e.classList.add("result-chart__div"),e.innerHTML=`\n          <h3 class="result-chart__h3">${this.title}</h3>\n          <ol class="result-chart__ol">\n            <li class="result-chart__my-result">Vos: ${this.myResult}</li>\n            <li class="result-chart__cpu-result">Máquina: ${this.cpuResult}</li>\n          </ol>\n        `;const t=document.createElement("style");t.innerHTML="\n        .result-chart__div {\n          background-color: #FFFFFF;\n          border: solid 10px #000000;\n          border-radius: 10px;\n          color: #D8FCFC;\n          width: 259px;\n          height: 217px;\n          margin: 0;\n        }\n        .result-chart__h3 {\n          font-family: 'Odibee Sans', cursive;\n          font-size: 55px;\n          color: #000000;\n          text-align: center;\n          margin: 15px 0 0 0;\n        }\n        .result-chart__ol {\n          padding: 0;\n        }\n        .result-chart__my-result {\n          font-family: 'Odibee Sans', cursive;\n          font-size: 45px;\n          text-align: right;\n          list-style: none;\n          color: #000000;\n          margin: 0 30px 0 0;\n          padding: 0;\n        }\n        .result-chart__cpu-result {\n          font-family: 'Odibee Sans', cursive;\n          font-size: 45px;\n          text-align: right;\n          list-style: none;\n          color: #000000;\n          margin: 0 30px 0 0;\n          padding: 0;\n        }\n        ",this.shadow.appendChild(e),this.shadow.appendChild(t)}}),customElements.define("countdown-comp",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("div");e.innerHTML='\n        <div class="countdown__container">\n          <div class="countdown__loading-container">\n            <div class="countdown__loading-circle"></div>\n          </div>\n          <span id="countdown__span"></span>\n        </div>\n      ';const t=document.createElement("style");t.innerHTML='\n        .countdown__container {\n          position: relative;\n          margin: 125px auto;\n        }\n        .countdown__loading-container {\n          display: grid;\n          justify-content: center;\n          width: 243px;\n          height: 243px;\n          transition: all 1s ease;\n          z-index: 10000;\n        }\n        .countdown__loading-circle {\n          border: 15px solid #000000;\n          width: 243px;\n          height: 243px;\n          border-radius: 100%;\n          \n          animation: girar 1.0s linear infinite;\n        }\n        #countdown__span {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          color: #000000;\n          font-family: "American Typewriter Bold";\n          font-size: 100px;\n        }\n\n        @keyframes girar {\n          from { transform: rotate(0deg); }\n          to { transform: rotate(360deg); }\n        }\n      ',this.shadow.appendChild(e),this.shadow.appendChild(t);var n=3;!function t(){const i=e.querySelector("#countdown__span");i.textContent=`${n}`,0==n?i.textContent="0":(n--,setTimeout(t,1e3))}()}});var c;c=new URL(s("27Lyk").resolve("fzTVb"),import.meta.url).toString();var d;d=new URL(s("27Lyk").resolve("jVuCD"),import.meta.url).toString();var p;p=new URL(s("27Lyk").resolve("ji1Wp"),import.meta.url).toString();var u;u=new URL(s("27Lyk").resolve("2IscL"),import.meta.url).toString();var h;h=new URL(s("27Lyk").resolve("bT38Q"),import.meta.url).toString();var m;m=new URL(s("27Lyk").resolve("6og9f"),import.meta.url).toString();const g=[{path:/\/start/,component:function(e){const t=document.createElement("div");return t.classList.add("starting-screen"),t.innerHTML='\n      <main-title title="Piedra Papel o Tijera"></main-title>\n      <blue-button class="button-start" text="Empezar"></blue-button>\n      <hands-comp></hands-comp>\n    ',t.querySelector(".button-start").addEventListener("click",(()=>{e.goTo("/instructions")})),t}},{path:/\/instructions/,component:function(e){const t=l.getMoves(),n=document.createElement("div");return n.classList.add("starting-screen"),n.innerHTML='\n        <instructions-text text="Presioná jugar\n        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos."></instructions-text>\n        <blue-button class="button-jugar" text="¡Jugar!"></blue-button>\n        <hands-comp></hands-comp>\n      ',n.querySelector(".button-jugar").addEventListener("click",(()=>{e.goTo("/countdown"),t.myMove=""})),n}},{path:/\/countdown/,component:function(e){const t=document.createElement("div");return t.classList.add("countdown-screen"),t.innerHTML='\n        <countdown-comp></countdown-comp>\n        <piedra-papel-tijera class="countdown__hands"></piedra-papel-tijera>\n    ',setTimeout((function(){e.goTo("/move")}),3e3),t}},{path:/\/move/,component:function(e){const t=l.getMoves();""==t.myMove?setTimeout((function(){e.goTo("/countdown")}),0):setTimeout((function(){e.goTo("/result")}),3e3);const n=document.createElement("div");n.classList.add("move-screen");const i=document.createElement("style");return i.innerHTML="\n    .top-hand {\n        width: 156px;\n        height: 312px;\n        -webkit-transform: rotate(-180deg);\n        -moz-transform: rotate(-180deg);\n        -ms-transform: rotate(-180deg);\n        transform: rotate(-180deg);\n    }\n    .bottom-hand {\n        width: 156px;\n        height: 312px;\n        align-self: flex-end;\n    }\n    ","piedra"==t.cpuMove&&"piedra"==t.myMove?(n.innerHTML=`\n          <img class="top-hand" src=${c}></img>\n          <img class="bottom-hand" src=${c}></img>\n        `,n.appendChild(i),n):"papel"==t.cpuMove&&"papel"==t.myMove?(n.innerHTML=`\n          <img class="top-hand" src=${d}></img>\n          <img class="bottom-hand" src=${d}></img>\n        `,n.appendChild(i),n):"tijera"==t.cpuMove&&"tijera"==t.myMove?(n.innerHTML=`\n          <img class="top-hand" src=${p}></img>\n          <img class="bottom-hand" src=${p}></img>\n        `,n.appendChild(i),n):"piedra"==t.cpuMove&&"tijera"==t.myMove?(n.innerHTML=`\n          <img class="top-hand" src=${c}></img>\n          <img class="bottom-hand" src=${p}></img>\n        `,n.appendChild(i),n):"papel"==t.cpuMove&&"piedra"==t.myMove?(n.innerHTML=`\n          <img class="top-hand" src=${d}></img>\n          <img class="bottom-hand" src=${c}></img>\n        `,n.appendChild(i),n):"tijera"==t.cpuMove&&"papel"==t.myMove?(n.innerHTML=`\n          <img class="top-hand" src=${p}></img>\n          <img class="bottom-hand" src=${d}></img>\n        `,n.appendChild(i),n):"tijera"==t.cpuMove&&"piedra"==t.myMove?(n.innerHTML=`\n          <img class="top-hand" src=${p}></img>\n          <img class="bottom-hand" src=${c}></img>\n        `,n.appendChild(i),n):"papel"==t.cpuMove&&"tijera"==t.myMove?(n.innerHTML=`\n          <img class="top-hand" src=${d}></img>\n          <img class="bottom-hand" src=${p}></img>\n        `,n.appendChild(i),n):"piedra"==t.cpuMove&&"papel"==t.myMove?(n.innerHTML=`\n          <img class="top-hand" src=${c}></img>\n          <img class="bottom-hand" src=${d}></img>\n        `,n.appendChild(i),n):void 0}},{path:/\/result/,component:function(e){const t=l.getMoves(),n=document.createElement("div");if("piedra"==t.cpuMove&&"piedra"==t.myMove||"papel"==t.cpuMove&&"papel"==t.myMove||"tijera"==t.cpuMove&&"tijera"==t.myMove){n.classList.add("result-page-draw__screen"),n.innerHTML=`\n        <result-star text="Empate" img="${m}"></result-star>\n        <result-chart title="Score" my-result="${l.getUserWins()}" cpu-result="${l.getCPUWins()}"></result-chart>\n        <blue-button class="result-page-button" text="Volver a jugar"></blue-button>\n      `;return n.querySelector(".result-page-button").addEventListener("click",(()=>{e.goTo("/countdown"),t.myMove=""})),n}if("piedra"==t.cpuMove&&"tijera"==t.myMove||"papel"==t.cpuMove&&"piedra"==t.myMove||"tijera"==t.cpuMove&&"papel"==t.myMove){n.classList.add("result-page-cpu-wins__screen"),n.innerHTML=`\n        <result-star text="Perdiste" img="${h}"></result-star>\n        <result-chart title="Score" my-result="${l.getUserWins()}" cpu-result="${l.getCPUWins()}"></result-chart>\n        <blue-button class="result-page-button" text="Volver a jugar"></blue-button>\n      `;return n.querySelector(".result-page-button").addEventListener("click",(()=>{e.goTo("/countdown"),t.myMove=""})),n}if("tijera"==t.cpuMove&&"piedra"==t.myMove||"papel"==t.cpuMove&&"tijera"==t.myMove||"piedra"==t.cpuMove&&"papel"==t.myMove){n.classList.add("result-page-user-wins__screen"),n.innerHTML=`\n        <result-star text="Ganaste" img="${u}"></result-star>\n        <result-chart title="Score" my-result="${l.getUserWins()}" cpu-result="${l.getCPUWins()}"></result-chart>\n        <blue-button class="result-page-button" text="Volver a jugar"></blue-button>\n      `;return n.querySelector(".result-page-button").addEventListener("click",(()=>{e.goTo("/countdown"),t.myMove=""})),n}}}];function v(e){function t(e){history.pushState({},"",e),n(e)}function n(n){for(const i of g)if(i.path.test(n)){const n=i.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(n)}}"/"==location.pathname?t("/start"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}}!function(){l.init();v(document.querySelector(".wrapper"))}();
//# sourceMappingURL=index.e075c6d3.js.map
