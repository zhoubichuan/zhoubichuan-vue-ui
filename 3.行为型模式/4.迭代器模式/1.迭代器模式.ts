function createIterator<T>(arr: Array<T>) {
  let index = 0;
  return {
    next() {
      return index < arr.length
        ? {
            value: arr[index++],
            done: false
          }
        : { done: true };
    }
  };
}
let it = createIterator([]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
