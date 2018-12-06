function Window(name) {
  this.name = name;
}
Window.prototype.getName = function() {
  console.log(this.name);
};
let createSingle = function(Constructor) {
  let instance;
  return function() {
    if (!instance) {
      Constructor.apply(this, arguments);
      Object.setPrototypeOf(this.Constructor.prototype);
      instance = this;
    }
    return instance;
  };
};
let CreateSingle = createSingle(Window);
let window1 = new CreateSingle("123");
let window2 = new CreateSingle("123");
window1 = window2;
console.log(window1 === window2);
