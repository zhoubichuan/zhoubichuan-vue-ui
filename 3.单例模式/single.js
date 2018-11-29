var Window = /** @class */ (function() {
  function Window(name) {
    this.name = name;
  }
  Window.getInstance = function(name) {
    if (!this.instance) {
      this.instance = new Window(name);
    }
    return this.getInstance;
  };
  return Window;
})();
var w1 = Window.getInstance();
var w2 = Window.getInstance();
console.log(w1 === w2);
