

//工厂模式
class Plant {
  constructor(name) {
    this.name = name;
  }
  growing() {
    console.log("生长");
  }
}
class Apple extends Plant {
  constructor(name, taste) {
    super(name);
    this.taste = taste;
  }
}
class Orange extends Plant {
  constructor(name, taste) {
    super(name);
    this.taste = taste;
  }
}
class AppleFactory {
  create() {
    return new Apple("苹果", "甜的");
  }
}
class OrangeFactory {
  create() {
    return new Orange("橘子", "酸的");
  }
}
const settings = {
  apple: AppleFactory,
  orange: OrangeFactory
};
let apple = new settings["apple"]().create();
console.log(apple);
let orange = new settings["orange"]().create();
console.log(orange);

//抽象工厂模式
