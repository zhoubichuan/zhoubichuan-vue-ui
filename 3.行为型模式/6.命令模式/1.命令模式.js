class Cooker {
  cook() {
    console.log("做饭");
  }
}
class Cleaner {
  clean() {
    console.log("保洁");
  }
}
class CookCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver.cook();
  }
}
class CleanCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver.clean();
  }
}
class Customer {
  constructor(command) {
    this.command = command;
  }
  clean() {
    this.command.execute();
  }
  cook() {
    this.command.execute();
  }
}
let cooker = new Cooker();
let cleaner = new Cleaner();
let cookCommand = new CleanCommand(cleaner);
let cleanCommand = new CleanCommand(cleaner);
let customer = new Customer(CookCommand);
customer.cook();
customer.
customer.clean();
