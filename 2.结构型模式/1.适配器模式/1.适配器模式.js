"use strict";
var Power = /** @class */ (function () {
    function Power() {
    }
    Power.prototype.charge = function () {
        return "220v";
    };
    return Power;
}());
var Adapter = /** @class */ (function () {
    function Adapter() {
        this.power = new Power();
    }
    Adapter.prototype.charge = function () {
        var power = this.power.charge();
        return power + "=>120V";
    };
    return Adapter;
}());
var Client = /** @class */ (function () {
    function Client() {
        this.adapter = new Adapter();
    }
    Client.prototype.use = function () {
        console.log(this.adapter.charge());
    };
    return Client;
}());
new Client().use();
