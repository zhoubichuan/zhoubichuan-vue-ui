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
//简单的工厂模式案例
var Plant1 = /** @class */ (function () {
    function Plant1(name) {
        this.name = name;
    }
    Plant1.prototype.growing = function () {
        console.log("生长");
    };
    return Plant1;
}());
var Apple1 = /** @class */ (function (_super) {
    __extends(Apple1, _super);
    function Apple1(name, taste) {
        var _this = _super.call(this, name) || this;
        _this.taste = taste;
        return _this;
    }
    return Apple1;
}(Plant1));
var Orange1 = /** @class */ (function (_super) {
    __extends(Orange1, _super);
    function Orange1(name, taste) {
        var _this = _super.call(this, name) || this;
        _this.taste = taste;
        return _this;
    }
    return Orange1;
}(Plant1));
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.create = function (name) {
        switch (name) {
            case "apple":
                return new Apple1("苹果", "甜的");
            case "orange":
                return new Orange1("橘子", "酸的");
        }
    };
    return Factory;
}());
var apple1 = Factory.create("apple");
console.log(apple1);
var orange1 = Factory.create("orange");
console.log(orange1);
