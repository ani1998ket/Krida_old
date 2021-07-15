import Krida from "../../src/Krida.js";
const InputManager = Krida.InputManager;

export default class MyScene extends Krida.Scene {
  constructor() {
    super();

    this.GRAVITY = new Krida.Vector2(0, 100);

    this.player = new Krida.GameObject();
    this.player.setPosition(10, 10);
    this.player.acceleration = this.GRAVITY;
  }

  update(dt) {
    this.player.velocity.x = 0;

    // Moves the player based on input
    if (
      InputManager.getKeyPress("ArrowRight") ||
      InputManager.getKeyPress("d")
    ) {
      this.player.velocity.x += 100;
    }
    if (
      InputManager.getKeyPress("ArrowLeft") ||
      InputManager.getKeyPress("a")
    ) {
      this.player.velocity.x -= 100;
    }

    // Applies physics to the player object
    this.player.update(dt);

    // Prevents player from going down the screen
    if (this.player.position.y > 140) this.player.position.y = 140;

    // Contains the player within X - bounds of canvas
    this.player.position.x %= 300;
  }

  render(ctx) {
    this.player.render(ctx);
  }
}
