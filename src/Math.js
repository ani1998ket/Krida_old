export class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  copy() {
    return new Vector2(this.x, this.y);
  }

  length() {
    return Math.sqrt(this.lengthSq());
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }

  normalize() {
    let l = this.length();
    return new Vector2(this.x / l, this.y / l);
  }

  add(v) {
    return new Vector2(this.x + v.x, this.y + v.y);
  }

  subtract(v) {
    return new Vector2(this.x - v.x, this.y - v.y);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  multiply(v) {
    return new Vector2(this.x * v.x, this.y * v.y);
  }
}
