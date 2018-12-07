class Star {
  constructor(name) {
    this.name = name;
    this.state = "";
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }
  attach(observer) {
    this.observers.push(observer);
  }
  notifyAllObservers() {
    this.observers.forEach(observer => observer.update());
  }
}
class Fan {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log(
      `${this.subject.name}有新的状态-${this.subject.getState()}，${
        this.name
      }正在更新`
    );
  }
}
let star = new Star("赵丽颖");
let fan1 = new Fan("我", star);
star.setState("结婚");
