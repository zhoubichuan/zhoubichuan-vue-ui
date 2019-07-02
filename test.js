"use strict";
var myname = "zfpx";
var age = 9;
var married = true;
var GENDER;
(function (GENDER) {
    GENDER["boy"] = "\u7537";
    GENDER["girl"] = "\u5973";
})(GENDER || (GENDER = {}));
console.log(GENDER.boy);
var v = 10;
v = "zfpx";
v = true;
console.log(v);
