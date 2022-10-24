type Move = "piedra" | "papel" | "tijera";

export const state = {
  data: {
    currentGame: {
      myMove: "",
      cpuMove: "",
    },
    history: [],
  },
  listeners: [],
  init() {
    const localData: any = localStorage.getItem("saved-state");
    if (!localData) {
      return;
    }
    this.setState(JSON.parse(localData));
  },
  getState() {
    return this.data;
  },
  setState(newState: Move) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb(newState);
    }
    localStorage.setItem("saved-state", JSON.stringify(newState));
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  getMoves() {
    const currentState = this.getState();
    return currentState.currentGame;
  },
  setMoves(getMove: Move) {
    const currentState = this.getState();

    // OBTIENE LA JUGADA DEL USUARIO
    currentState.currentGame.myMove = getMove;

    // GENERA LA JUGADA DEL CPU
    const movesArray = ["piedra", "papel", "tijera"];
    const randomMove =
      movesArray[Math.floor(Math.random() * movesArray.length)];
    currentState.currentGame.cpuMove = randomMove;

    // PASA LOS PARÁMETROS A getWinner()
    this.getWinner(getMove, randomMove);

    // SETEA EL STATE
    this.setState(currentState);
  },
  getWinner(myMove: Move, cpuMove: Move) {
    const currentState = this.getState();

    if (
      (myMove == "piedra" && cpuMove == "piedra") ||
      (myMove == "papel" && cpuMove == "papel") ||
      (myMove == "tijera" && cpuMove == "tijera")
    ) {
      currentState.history.push("draw");
    }
    if (
      (myMove == "piedra" && cpuMove == "tijera") ||
      (myMove == "papel" && cpuMove == "piedra") ||
      (myMove == "tijera" && cpuMove == "papel")
    ) {
      currentState.history.push("user");
    }
    if (
      (myMove == "tijera" && cpuMove == "piedra") ||
      (myMove == "papel" && cpuMove == "tijera") ||
      (myMove == "piedra" && cpuMove == "papel")
    ) {
      currentState.history.push("cpu");
    }

    this.setState(currentState);
  },
  getUserWins() {
    const currentState = this.getState();

    const filterUserWins = currentState.history.filter((i) => {
      return i == "user";
    });
    return filterUserWins.length;
  },
  getCPUWins() {
    const currentState = this.getState();

    const filterUserWins = currentState.history.filter((i) => {
      return i == "cpu";
    });
    return filterUserWins.length;
  },
};
