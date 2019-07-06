class Duck {
  eat(food:string) {
    console.log(`吃${food}`);
  }
}
class TangDuck {
  duck:any
  constructor() {
    this.duck = new Duck();
  }
  eat() {
    this.duck.eat("鸡肉");
  }
}
new TangDuck().eat();
