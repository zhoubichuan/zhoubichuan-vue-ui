Function.prototype.before = function(beforeFn) {
  let _this = this;
  return function() {
    beforeFn.apply(this, arguments);
    return _this.apply(this, arguments);
  };
};
Function.prototype.after = function(afterFn) {
  let _this = this;
  return function() {
    _this.apply(this, arguments);
    afterFn.apply(this, arguments);
  };
};
function buy(money, goods) {
  console.log(`花${money}买${goods}`);
}
buy = buy.before(function() {
  console.log("攒钱买东西");
});
buy = buy.after(function() {
  console.log("剩下的钱存起来");
});
buy(8000, "电脑");
