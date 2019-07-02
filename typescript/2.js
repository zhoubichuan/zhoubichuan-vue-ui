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
/**
 * public
 * protected
 * private
 */
var Person = /** @class */ (function () {
    function Person(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, money, num) {
        var _this = _super.call(this, name, age, money) || this;
        _this.num = num;
        return _this;
    }
    Student.prototype.getName = function () {
        //在子类中可以访问父类的公有属性
        console.log("\u6211\u7684\u540D\u5B57\u53EB" + this.name);
    };
    Student.prototype.getAge = function () {
        //受保护的属性子类可以访问
        console.log("\u6211\u4ECA\u5E74" + this.age);
    };
    Student.prototype.getMoney = function () {
        //money属性是私有的，只能在Person中被访问到(ts中报错)
        // console.log(`我的私房钱是${this.money}`);
    };
    return Student;
}(Person));
var s1 = new Student("zfpx", 10, 100, 1);
//在其它类中可以访问父类的公有属性
console.log(s1.name);
s1.getAge();
//属性age是受保护的，只能在子类和自己的类中被访问
// console.log(s1.age);
// console.log(s1.money);
