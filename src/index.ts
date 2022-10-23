import "./components/main-title";
import "./components/blue-button";
import "./components/hands-comp";
import "./components/piedra-papel-tijera";
import "./components/instructions-text";
import "./components/result-star";
import "./components/result-chart";
import "./components/countdown-comp";
import { initRouter } from "./routes";
import { state } from "./state";

(function () {
  state.init();
  const wrapper = document.querySelector(".wrapper");
  initRouter(wrapper);
})();
