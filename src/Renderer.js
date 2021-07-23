export default class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
  }

  render(scene) {
    let ctx = this.canvas.getContext("2d");

    for (let key in scene.gameObjects) {
      let gameObject = scene.gameObjects[key];
      ctx.save();
      ctx.fillRect(gameObject.position.x, gameObject.position.y, 10, 10);
      ctx.restore();
    }
  }

  clear() {
    let ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
