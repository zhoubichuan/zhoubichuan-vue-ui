class Circle {
  x:number
  y:number
  radius:number
  constructor(x:number, y:number, radius:number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  clone() {
    return (<any>Object).assign({}, this);
  }
}
let _c1 = new Circle(100, 100, 5);
let _c2 = _c1.clone();
console.log(_c1, _c2);
console.log(_c1 === _c2);

