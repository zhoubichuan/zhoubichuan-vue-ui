//动物的种类
class Animal2 {
  name: string;
  constructor(name) {
    this.name = name;
  }
  //   eat(food) {}
}
class Dog2 extends Animal2 {
  eat(food) {
    console.log(`${this.name}吃${food}`);
  }
}
class Person2 extends Animal2 {
  eat(food) {
    console.log(`${this.name}吃${food}`);
  }
}
let d = new Dog2("狗");
d.eat("肉");
let p = new Person2("人");
p.eat("烧饼");
