"use strict";
var Window = (function () {
    var window;
    var Window = function (name) {
        if (window) {
            return window;
        }
        else {
            this.name = name;
            return (window = this);
        }
    };
    Window.prototype.getName = function () {
        console.log(this.name);
    };
    return Window;
})();
var window1 = new Window("123");
var window2 = new Window("123");
window1.getName();
console.log(window1 === window2);
