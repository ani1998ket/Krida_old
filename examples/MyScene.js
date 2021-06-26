import Scene from "../src/Scene";

export default class MyScene extends Scene{
  constructor(){
    this.x = 0
    this.y = 0
  }
  update(dt){
    this.x += 100 * dt
    this.y += 10 * dt
  }
  render(ctx){
    ctx.fillRect( this.x, this.y, 40, 40 )
  }
}