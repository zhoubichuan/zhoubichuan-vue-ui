"use strict";
var Person3 = /** @class */ (function () {
    function Person3() {
        //私有的，自己能访问，自己的子类和其他类都不能访问
        this.money = 100;
    }
    Person3.prototype.getMoney = function () {
        console.log("" + this.money);
    };
    return Person3;
}());
var p3 = new Person3();
console.log(p3.money);
