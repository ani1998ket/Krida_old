class InputManager {
  constructor() {
    this.keyPress = {};
  }

  getKeyPress(key) {
    if (this.keyPress[key] == undefined) {
      this.keyPress[key] = false;
    }

    return this.keyPress[key];
  }

  setKeyPress(key, value) {
    this.keyPress[key] = value;
  }
}

let inputManager = new InputManager();
window.addEventListener("keydown", (e) => {
  inputManager.setKeyPress(e.key, true);
});

window.addEventListener("keyup", (e) => {
  inputManager.setKeyPress(e.key, false);
});

export default inputManager;
