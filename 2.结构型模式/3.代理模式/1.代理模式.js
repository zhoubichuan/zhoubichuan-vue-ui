"use strict";
var Google = /** @class */ (function () {
    function Google() {
    }
    Google.prototype.get = function () {
        return "google";
    };
    return Google;
}());
var Proxy = /** @class */ (function () {
    function Proxy() {
        this.google = new Google();
    }
    Proxy.prototype.get = function () {
        return this.google.get();
    };
    return Proxy;
}());
var proxy = new Proxy();
var ret = proxy.get();
console.log(ret);
