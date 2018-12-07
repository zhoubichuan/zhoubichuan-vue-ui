class Sum {
  sum(a, b) {
    return a + b;
  }
}
class Minus {
  minus(a, b) {
    return a - b;
  }
}
class Multiply {
  multiply(a, b) {
    return a * b;
  }
}
class Calculator {
  constructor() {
    this.sumObj = new Sum();
    this.minusObj = new Minus();
    this.multiplyObj = new Multiply();
  }
  sum(...args) {
    this.sumObj.sum(...args);
  }
  minus(...args) {
    this.minusObj.minus(...args);
  }
  multiply(...args) {
    this.multiplyObj.multiply(...args);
  }
}
let calculator = new Calculator();
calculator.sum(1, 2);
calculator.minus(1, 2);
calculator.multiply(1, 2);
