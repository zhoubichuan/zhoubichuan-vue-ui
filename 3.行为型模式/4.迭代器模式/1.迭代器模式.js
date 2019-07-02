"use strict";
function createIterator(arr) {
    var index = 0;
    return {
        next: function () {
            return index < arr.length
                ? {
                    value: arr[index++],
                    done: false
                }
                : { done: true };
        }
    };
}
var it = createIterator([]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
