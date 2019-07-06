"use strict";
var Window1 = /** @class */ (function () {
    function Window1(name) {
        this.name = name;
    }
    Window1.getInstance = function (name) {
        if (!this.instance) {
            this.instance = new Window1(name);
        }
        return this.getInstance;
    };
    return Window1;
}());
var w1 = Window1.getInstance('');
var w2 = Window1.getInstance('');
console.log(w1 === w2);
