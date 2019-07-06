"use strict";
var Circle = /** @class */ (function () {
    function Circle(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    Circle.prototype.clone = function () {
        return Object.assign({}, this);
    };
    return Circle;
}());
var _c1 = new Circle(100, 100, 5);
var _c2 = _c1.clone();
console.log(_c1, _c2);
console.log(_c1 === _c2);
