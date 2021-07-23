import { Vector2 } from "./Math.js";

export default class GameObject {
  constructor() {
    this.position = new Vector2();
    this.velocity = new Vector2();
    this.acceleration = new Vector2();
  }

  setPosition(x, y) {
    this.position.set(x, y);
  }

  setVelocity(x, y) {
    this.velocity.set(x, y);
  }

  update(dt) {
    let dv = this.velocity.multiply(new Vector2(dt, dt));
    let da = this.acceleration.multiply(new Vector2(dt, dt));
    this.position = this.position.add(dv);
    this.velocity = this.velocity.add(da);
  }
}
