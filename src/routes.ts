import { initStartPage } from "./pages/start";
import { initInstructionsPage } from "./pages/instructions";
import { initCountdownPage } from "./pages/countdown";
import { initMovePage } from "./pages/move";
import { initResultPage } from "./pages/result";

const routes = [
  {
    path: /\/desafio-m5\/start/,
    component: initStartPage,
  },
  {
    path: /\/desafio-m5\/instructions/,
    component: initInstructionsPage,
  },
  {
    path: /\/desafio-m5\/countdown/,
    component: initCountdownPage,
  },
  {
    path: /\/desafio-m5\/move/,
    component: initMovePage,
  },
  {
    path: /\/desafio-m5\/result/,
    component: initResultPage,
  },
];

export function initRouter(container) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/start");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
