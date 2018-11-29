namespace Validation {

}
class Person3 {
  //私有的，自己能访问，自己的子类和其他类都不能访问
  private money: number = 100;
  getMoney() {
    console.log(`${this.money}`);
  }
}
let p3 = new Person3();
console.log(p3.money);
