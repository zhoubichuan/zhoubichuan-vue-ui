class Duck {
  eat(food) {
    console.log(`吃${food}`);
  }
}
class TangDuck {
  constructor() {
    this.duck = new Duck();
  }
  eat() {
    this.duck.eat("鸡肉");
  }
}
new TangDuck().eat();
