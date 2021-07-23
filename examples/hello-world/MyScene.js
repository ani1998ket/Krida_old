import Krida from "../../src/Krida.js";
import Player from "./Player.js";

export default class MyScene extends Krida.Scene {
  constructor() {
    super();

    this.GRAVITY = new Krida.Vector2(0, 100);

    // adds player object to the scene
    this.addGameObject( "player", new Player( 10, 10, this.GRAVITY ) );

    if( Krida.StorageManager.get("visited") == null ){
      Krida.StorageManager.set("visited", 0);
    }
    let val = parseInt(Krida.StorageManager.get("visited")) + 1;
    Krida.StorageManager.set("visited", val.toString() );
  }

  update(dt) {
    super.update(dt);
  }
}