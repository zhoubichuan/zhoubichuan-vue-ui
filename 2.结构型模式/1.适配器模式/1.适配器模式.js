class Power {
  charge() {
    return "220v";
  }
}
class Adapter {
  constructor() {
    this.power = new Power();
  }
  charge() {
    let power = this.power.charge();
    return `${power}=>120V`;
  }
}
class Client {
  constructor() {
    this.adapter = new Adapter();
  }
  use() {
    console.log(this.adapter.charge());
  }
}
new Client().use();
