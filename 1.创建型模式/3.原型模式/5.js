function Foo() {
  this.a = 10;
}
Foo.prototype.b = 20;
let f = new Foo();
console.log(f.a, f.b);
console.log(f.hasOwnProperty("a"));
console.log(f.hasOwnProperty("b"));
