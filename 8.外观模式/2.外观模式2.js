class CPU {
  start() {
    console.log("打开CPU");
  }
}
class Memory {
  start() {
    console.log("打开内存");
  }
}
class Disk {
  start() {
    console.log("打开硬盘");
  }
}
class Computer {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.disk = new Disk();
  }
  start() {
    this.cpu.start();
    this.memory.start();
    this.disk.start();
  }
}
new Computer().start();
