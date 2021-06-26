import Scene from "../src/Scene.js";

export default class MyScene extends Scene{
  constructor(){
    super()
    this.x = 50
    this.y = 50
  }
  update(dt){
    this.x += 100 * dt
    this.x %= 300
  }
  render(ctx){
    ctx.fillRect( this.x, this.y, 40, 40 )
  }
}