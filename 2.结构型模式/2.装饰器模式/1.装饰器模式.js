"use strict";
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.eat = function (food) {
        console.log("\u5403" + food);
    };
    return Duck;
}());
var TangDuck = /** @class */ (function () {
    function TangDuck() {
        this.duck = new Duck();
    }
    TangDuck.prototype.eat = function () {
        this.duck.eat("鸡肉");
    };
    return TangDuck;
}());
new TangDuck().eat();
