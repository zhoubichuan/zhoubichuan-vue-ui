"use strict";
var jsPerson1 = {
    name: "223",
    age: "34",
    writeJs: function () {
        console.log("my name is " + this.name);
    }
};
jsPerson1.writeJs();
//单例模式虽然解决了分组的作用，但是不能实现批量的生产，属于手工作用模式 -->"工厂模式"
//把实现同一事件的相同代码放到一个函数中，以后如果在想实现这个功能，不需要从新编写这些代码，只需要执行当前的函数即可 -->'函数的封装'
//-->'低耦合高内聚'：减少页面中的冗余代码，提高代码的重复利用率
function createJsPerson(name, age) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.writeJs = function () {
        console.log("my name is " + this.name);
    };
    return obj;
}
var p1 = createJsPerson("xxx", "47");
//所有的编程语言都是面向对象开发的 -->类的继承、封装、多态
//继承：子类继承父类中的属性和方法
//多态：当前方法的多种形态（后台语言中：多态包含重载和重写）
//js中不存在重载，方法名一样的话，后面的会把前面的覆盖掉，最后只保留一个
//js中有一个操作类似重载但是不是重载：我们可以根据传递参数的不一样的，实现不同的功能
function sum(num) {
    if (typeof num === "undefined") {
        return 0;
    }
    return num;
}
sum(100);
sum();
//重写：子类重写父类的方法
