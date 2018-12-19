class A {
  constructor(bridge) {
    this.position = "A地点";
    this.bridge = bridge;
  }
  go() {
    console.log(`从${this.from()}到达${this.bridge.to}`);
  }
  from() {
    throw new Error("子类必须实现此方法");
  }
}
class A1 extends A {
  from() {
    return "A1";
  }
}
class A2 extends A {
  from() {
    return "A2";
  }
}
class B {
  to() {
    throw new Error("子类必须实现此方法");
  }
}
class B1 extends B {
  to() {
    return "B1";
  }
}
class B2 extends B {
  to() {
    return "B2";
  }
}
let b1= new B2()
let b2=new B
