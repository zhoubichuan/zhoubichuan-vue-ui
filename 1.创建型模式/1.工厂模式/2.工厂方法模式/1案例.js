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
var Plant2 = /** @class */ (function () {
    function Plant2(name) {
        this.name = name;
    }
    Plant2.prototype.grow = function () {
        console.log('grow~~~');
    };
    return Plant2;
}());
var Apple2 = /** @class */ (function (_super) {
    __extends(Apple2, _super);
    function Apple2(name) {
        var _this = _super.call(this, name) || this;
        _this.taste = '甜';
        return _this;
    }
    return Apple2;
}(Plant2));
var Orange2 = /** @class */ (function (_super) {
    __extends(Orange2, _super);
    function Orange2(name) {
        var _this = _super.call(this, name) || this;
        _this.taste = "酸";
        return _this;
    }
    return Orange2;
}(Plant2));
var AppleFactory = /** @class */ (function () {
    function AppleFactory() {
    }
    AppleFactory.prototype.create = function () {
        return new Apple2('苹果');
    };
    return AppleFactory;
}());
var OrangeFactory = /** @class */ (function () {
    function OrangeFactory() {
    }
    OrangeFactory.prototype.create = function () {
        return new Orange2('橘子');
    };
    return OrangeFactory;
}());
var settings = {
    'apple': AppleFactory,
    'orange': OrangeFactory
};
var apple2 = new settings['apple']().create();
console.log(Apple2);
var orange2 = new settings['orange']().create();
console.log(Orange2);
