let Window = (function() {
  let window;
  let Window = function(name) {
    if (window) {
      return window;
    } else {
      this.name = name;
      return (window = this);
    }
  };
  Window.prototype.getName = function() {
    console.log(this.name);
  };
  return Window;
})();
let window1 = new Window("123");
let window2 = new Window("123");
window1.getName();
console.log(window1 === window2);
