class Animal {
  public name: string;
  constructor(name) {
    this.name = name;
  }
  public food: string;
  eat(food) {
    console.log(`${this.name}吃${food}`);
  }
}
class Dog extends Animal {
  constructor() {
    super("狗");
  }
  speak() {
    console.log(`汪汪汪`);
  }
}
class Cat extends Animal {
  constructor() {
    super("猫");
  }
  speak() {
    console.log(`喵喵喵`);
  }
}
let dog = new Dog();
dog.eat("肉");
dog.speak();
let cat = new Cat();
cat.eat("鱼");
cat.speak();
