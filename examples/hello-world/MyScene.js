import Krida from "../../src/Krida.js";
const InputManager = Krida.InputManager;

export default class MyScene extends Krida.Scene {
  constructor() {
    super();

    this.GRAVITY = new Krida.Vector2(0, 100);

    // adds player object to the scene
    this.addGameObject( "player", new Krida.GameObject() );

    //reference to the player object
    let player = this.getGameObject("player");
    player.setPosition(10, 10);
    player.acceleration = this.GRAVITY;

    if( Krida.StorageManager.get("visited") == null ){
      Krida.StorageManager.set("visited", 0);
    }
    let val = parseInt(Krida.StorageManager.get("visited")) + 1;
    Krida.StorageManager.set("visited", val.toString() );
  }

  update(dt) {
    let player = this.getGameObject("player");

    player.velocity.x = 0;

    // Moves the player based on input
    if (
      InputManager.getKeyPress("ArrowRight") ||
      InputManager.getKeyPress("d")
    ) {
      player.velocity.x += 100;
    }
    if (
      InputManager.getKeyPress("ArrowLeft") ||
      InputManager.getKeyPress("a")
    ) {
      player.velocity.x -= 100;
    }
    //Jump
    if (
      InputManager.getKeyPress("ArrowUp") ||
      InputManager.getKeyPress(" ")
    ) {
      player.velocity.y -= 3;
    }

    super.update(dt);

    // Prevents player from going down the screen
    if (player.position.y > 140) {
      player.position.y = 140;
      player.setVelocity(0, 0);
    }

    // Contains the player within X - bounds of canvas
    player.position.x = mod2( player.position.x, 300 );
  }

  render(ctx) {
    super.render( ctx );
    ctx.fillText("Visited: " + Krida.StorageManager.get("visited"), 10, 10);
  }
}

function mod2( a, b ){
  return ((a % b) + b ) % b;
}
