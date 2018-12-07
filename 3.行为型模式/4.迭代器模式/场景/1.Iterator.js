Array.prototype[Symbol.iterator] = function() {
  let index = 0;
  return {
    next: () => {
      return index < this.length
        ? { value: this[index++], done: false }
        : { done: true };
    }
  };
};
let arr = [1, 2];
let it2 = arr[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
