class Battery {
  constructor() {
    this.amount = "high";
  }
  show() {
    if (this.amount == "high") {
      console.log("绿色");
      this.amount = "middle";
    } else if (this.amount == "middle") {
      console.log("黄色");
      this.amount = "low";
    } else {
      console.log("红色");
    }
  }
}
let battery = new Battery();
battery.show();
battery.show();
battery.show();
/* 缺点：违反开放-封闭原则
 * 方法逻辑太多太复杂  
 * 颜色状态切换不明显
 * 过多的if/else让代码不可维护
 *  */

/* 改进 */
class Battery2 {
  constructor(state) {
    this.amount = "high";
    this.state = new SuccessState();
  }
  show() {
    this.state.show();
    if (this.amount == "heigth") {
      this.amount = "middle";
      this.setState(new WarningState());
    } else if (this.amount == "middle") {
      this.amount = "low";
      this.setState(new DangerState());
    }
  }
  setState(state) {
    this.state = state;
  }
}
class SuccessState {
  constructor(battery) {
    this.battery = battery;
  }
  show() {
    console.log(`绿色${battery.amount}`);
  }
}
class WarningState {
  constructor(battery) {
    this.battery = battery;
  }
  show() {
    console.log(`黄色${battery.amount}`);
  }
}
class DangerState {
  constructor(battery) {
    this.battery = battery;
  }
  show() {
    console.log(`红色${battery.amount}`);
  }
}
let battery2 = new Battery();
battery2.show();
battery2.show();
battery2.show();
