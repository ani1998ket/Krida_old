import Renderer from "./Renderer.js";

export default class Engine {
  constructor() {
    this.currentScene = null;
    this.lastFrameTime = null;
    this.renderer = new Renderer(null);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    // Add a method
    this.renderer.canvas = canvas;
  }

  setScene(scene) {
    this.currentScene = scene;
  }

  start() {
    this.requestID = window.requestAnimationFrame((timestep) => {
      this.lastFrameTime = timestep;
      let dt = timestep - this.lastFrameTime;
      this.gameloop(dt / 1000);
    });
  }

  stop() {
    window.cancelAnimationFrame(this.requestID);
  }

  gameloop(dt) {
    this.update(dt);
    this.render();
    this.requestID = window.requestAnimationFrame((timestep) => {
      let dt = timestep - this.lastFrameTime;
      this.gameloop(dt / 1000);
      this.lastFrameTime = timestep;
    });
  }

  update(dt) {
    if (this.canvas && this.currentScene) this.currentScene.update(dt);
  }

  render() {
    if (this.canvas == null) return;

    this.renderer.clear();
    if (this.currentScene) this.renderer.render(this.currentScene);
  }
}
