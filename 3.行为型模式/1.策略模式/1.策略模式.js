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
/* 如果不用策略模式代码都耦合在一起了 */
var Customer = /** @class */ (function () {
    function Customer(type) {
        this.type = type;
    }
    Customer.prototype.pay = function (amount) {
        if (this.type == "会员顾客") {
            return amount * 0.9;
        }
        else if (this.type == "VIP顾客") {
            return amount * 0.8;
        }
        return amount;
    };
    return Customer;
}());
var c1 = new Customer("普通顾客");
console.log(c1.pay(100));
var c2 = new Customer("会员顾客");
console.log(c2.pay(100));
var c3 = new Customer("VIP顾客");
console.log(c3.pay(100));
/* 1、用策略模式改写：可以解耦合 */
var Customer2 = /** @class */ (function () {
    function Customer2(kind) {
        this.kind = kind;
    }
    Customer2.prototype.cost = function (amount) {
        return this.kind.discount(amount);
    };
    return Customer2;
}());
var Kind = /** @class */ (function () {
    function Kind() {
    }
    return Kind;
}());
var Normal = /** @class */ (function (_super) {
    __extends(Normal, _super);
    function Normal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Normal.prototype.discount = function (amount) {
        return amount;
    };
    return Normal;
}(Kind));
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Member.prototype.discount = function (amount) {
        return amount * 0.9;
    };
    return Member;
}(Kind));
var VIP = /** @class */ (function (_super) {
    __extends(VIP, _super);
    function VIP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VIP.prototype.discount = function (amount) {
        return amount * 0.8;
    };
    return VIP;
}(Kind));
var d1 = new Customer2(new Normal());
console.log(d1.cost(100));
d1.kind = new Member();
console.log(d1.cost(100));
d1.kind = new VIP();
console.log(d1.cost(100));
/* 2、把算法封装在策略对象中，指定算法调用即可 */
var Customer3 = /** @class */ (function () {
    function Customer3() {
        this.kinds = {
            normal: function (price) {
                return price;
            },
            member: function (price) {
                return price * 0.9;
            },
            vip: function (price) {
                return price * 0.8;
            }
        };
    }
    Customer3.prototype.cost = function (kind, amount) {
        return this.kinds[kind](amount);
    };
    return Customer3;
}());
var c = new Customer3();
console.log(c.cost("normal", 100));
console.log(c.cost("member", 100));
console.log(c.cost("vip", 100));
