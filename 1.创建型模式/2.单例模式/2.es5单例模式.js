var Window = function(name) {
  this.name = name;
};

Window.prototype.getName = function() {
  console.log(this.name);
};
Window.getInstance = (function() {
  var window = null;
  return function(name) {
    if (!window) window = new Window(name);
    return window;
  };
})();
var window = Window.getInstance("123");
window.getName();
