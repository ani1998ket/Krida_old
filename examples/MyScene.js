import Scene from "../src/Scene.js";
import GameObject from "../src/GameObject.js";
import { Vector2 } from "../src/Math.js";
import InputManager from "../src/InputManager.js";

const GRAVITY = new Vector2( 0, 100 )

export default class MyScene extends Scene{
  constructor(){
    super()
    this.player = new GameObject();
    this.player.setPosition(10, 10);
    this.player.acceleration = GRAVITY;
  }
  update(dt){
    
    this.player.velocity.x = 0;

    if( InputManager.getKeyPress("ArrowRight") ||  InputManager.getKeyPress("d")){
      this.player.velocity.x += 100;
    }
    if( InputManager.getKeyPress("ArrowLeft")  ||  InputManager.getKeyPress("a")){
      this.player.velocity.x -= 100;
    }

    this.player.update( dt )

    if( this.player.position.y > 140 )
      this.player.position.y = 140;

    this.player.position.x %= 300;
  }
  render(ctx){
    this.player.render( ctx )
  }
}