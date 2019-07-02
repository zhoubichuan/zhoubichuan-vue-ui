"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function (food) {
        console.log(this.name + "\u5403" + food);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, "狗") || this;
    }
    Dog.prototype.speak = function () {
        console.log("\u6C6A\u6C6A\u6C6A");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.call(this, "猫") || this;
    }
    Cat.prototype.speak = function () {
        console.log("\u55B5\u55B5\u55B5");
    };
    return Cat;
}(Animal));
var dog = new Dog();
dog.eat("肉");
dog.speak();
var cat = new Cat();
cat.eat("鱼");
cat.speak();
