"use strict";
var jQuery = /** @class */ (function () {
    function jQuery(selector) {
        var elements = Array.from(document.querySelectorAll(selector));
        var length = elements ? elements.length : 0;
        for (var i = 0; i < length; i++) {
            this[i] = elements[i];
        }
        this.length = length;
    }
    jQuery.prototype.html = function () {
    };
    return jQuery;
}());
var $ = function (selector) {
    return new jQuery(selector);
};
