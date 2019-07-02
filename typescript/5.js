"use strict";
//在Java中，方法名相同，参数的数量 不同，或者说数量相同但是类不同也是不同的方法
function print() {
    var args = Array.from(arguments);
    if (args.length == 1) {
        console.log(args[0]);
    }
    else if (args.length == 2) {
        console.log(args[0] + args[1]);
    }
    else if (args.length == 1) {
        console.log(args[0] + args[1]);
    }
}
console.log(print("hello"));
console.log(print(1, 3));
