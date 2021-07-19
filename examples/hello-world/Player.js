import Krida from "../../src/Krida.js";
const InputManager = Krida.InputManager;

export default class Player extends Krida.GameObject {
  constructor(x, y, GRAVITY) {
    super();

    this.setPosition(x, y);
    this.acceleration = GRAVITY;
  }

  update(dt) {
    this.velocity.x = 0;

    // Moves the player based on input
    if (
      InputManager.getKeyPress("ArrowRight") ||
      InputManager.getKeyPress("d")
    ) {
      this.velocity.x += 100;
    }
    if (
      InputManager.getKeyPress("ArrowLeft") ||
      InputManager.getKeyPress("a")
    ) {
      this.velocity.x -= 100;
    }
    //Jump
    if (InputManager.getKeyPress("ArrowUp") || InputManager.getKeyPress(" ")) {
      this.velocity.y -= 3;
    }

    super.update(dt);

    // Prevents player from going down the screen
    if (this.position.y > 140) {
      this.position.y = 140;
      this.setVelocity(0, 0);
    }

    // Contains the player within X - bounds of canvas
    this.position.x = mod2(this.position.x, 300);
  }

  render(ctx) {
    super.render(ctx);
  }
}

function mod2(a, b) {
  return ((a % b) + b) % b;
}
