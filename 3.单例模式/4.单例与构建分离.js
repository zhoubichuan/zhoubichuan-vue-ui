function Window(name) {
  this.name = name;
}
Window.prototype.getName = function() {
  console.log(this.name);
};
let createSingle = (function() {
  let instance;
  return function(name) {
    if (!instance) {
      instance = new Window(name);
    }
    return instance;
  };
})();
let window1 = new createSingle("123");
let window2 = new createSingle("123");
window1.getName();
console.log(window1 === window2);
