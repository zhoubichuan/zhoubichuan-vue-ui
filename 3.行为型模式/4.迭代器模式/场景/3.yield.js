let generator = function*() {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
};
var iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
