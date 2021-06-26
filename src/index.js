import Scene from "./Scene.js"

export default class Engine {
  setCanvas(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.currentScene = null
    this.lastFrameTime = null
  }

  start() {
    this.currentScene = new Scene( this.canvas, this.ctx )
    this.requestID = window.requestAnimationFrame((timestep) => {
      this.lastFrameTime = timestep
      let dt = timestep - this.lastFrameTime
      this.gameloop(dt / 1000)
    })

  }

  stop() {
    this.currentScene = null
    window.cancelAnimationFrame(this.requestID);
  }

  gameloop(dt) {
    this.update(dt)
    this.render()
    this.requestID = window.requestAnimationFrame((timestep) => {
      let dt = timestep - this.lastFrameTime
      this.gameloop(dt / 1000)
      this.lastFrameTime = timestep
    })
  }

  update(dt) {
    if (this.currentScene)
      this.currentScene.update(dt)
  }
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.save()
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.restore()
    if (this.currentScene)
      this.currentScene.render(this.ctx)
  }
}