class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  clone() {
    return Object.assign({}, this);
  }
}
let c1 = new Circle(100, 100, 5);
let c2 = c1.clone();
console.log(c1, c2);
console.log(c1 === c2);
