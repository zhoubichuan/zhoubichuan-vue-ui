//简单的工厂模式
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
class Factory {
  static create(name) {
    switch (name) {
      case "apple":
        return new Apple("苹果", "甜的");
      case "orange":
        return new Orange("橘子", "酸的");
    }
  }
}
let apple = Factory.create("apple");
console.log(apple);
let orange = Factory.create("orange");
console.log(orange);
