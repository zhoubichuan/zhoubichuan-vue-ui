class Power {
  charge() {
    return "220v";
  }
}
class Adapter {
  power:any
  constructor() {
    this.power = new Power();
  }
  charge() {
    let power = this.power.charge();
    return `${power}=>120V`;
  }
}
class Client {
  adapter:any
  constructor() {
    this.adapter = new Adapter();
  }
  use() {
    console.log(this.adapter.charge());
  }
}
new Client().use();
