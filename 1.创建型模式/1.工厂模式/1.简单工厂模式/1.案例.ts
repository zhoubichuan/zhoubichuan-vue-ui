//简单的工厂模式案例
class Plant1 {
  name:string
  constructor(name:string) {
    this.name = name;
  }
  growing():void {
    console.log("生长");
  }
}
class Apple1 extends Plant1 {
  taste:string
  constructor(name:string, taste:string) {
    super(name);
    this.taste = taste;
  }
}
class Orange1 extends Plant1 {
  taste:string
  constructor(name:string, taste:string) {
    super(name);
    this.taste = taste;
  }
}
class Factory {
  static create(name:string) {
    switch (name) {
      case "apple":
        return new Apple1("苹果", "甜的");
      case "orange":
        return new Orange1("橘子", "酸的");
    }
  }
}
let apple1 = Factory.create("apple");
console.log(apple1);
let orange1 = Factory.create("orange");
console.log(orange1);
