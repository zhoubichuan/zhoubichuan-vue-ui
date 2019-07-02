class Window {
  constructor(name) {
    this.name = name;
  }
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Window(name);
    }
    return this.getInstance;
  }
}
var w1 = Window.getInstance();
var w2 = Window.getInstance();
console.log(w1 === w2);
