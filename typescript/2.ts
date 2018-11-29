/**
 * public
 * protected
 * private
 */
class Person {
  //公有属性，自己，自己的子类和其他类都可以调用
  public name: string;
  //受保护的属性，自己，自己的子类能访问，其他的类不能访问
  protected age: number;
  //私有的，自己能访问，自己的子类和其他类都不能访问
  private money: number;
  constructor(name, age, money) {
    this.name = name;
    this.age = age;
    this.money = money;
  }
}

class Student extends Person {
  public num: number;
  constructor(name, age, money, num) {
    super(name, age, money);
    this.num = num;
  }
  getName() {
    //在子类中可以访问父类的公有属性
    console.log(`我的名字叫${this.name}`);
  }
  getAge() {
    //受保护的属性子类可以访问
    console.log(`我今年${this.age}`);
  }
  getMoney() {
    //money属性是私有的，只能在Person中被访问到(ts中报错)
    // console.log(`我的私房钱是${this.money}`);
  }
}
let s1 = new Student("zfpx", 10, 100, 1);
//在其它类中可以访问父类的公有属性
console.log(s1.name);
s1.getAge();
//属性age是受保护的，只能在子类和自己的类中被访问
// console.log(s1.age);
// console.log(s1.money);
