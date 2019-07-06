let utils = {};
utils.def = function(namespace, fn) {
  let _namespace = namespace.split(".");
  let fnName = _namespace.pop();
  let current = utils;
  for (let i = 0; i < _namespace.length; i++) {
    let __namespace = _namespace[i];
    if (!current[__namespace]) {
      current[__namespace] = {};
    }
    current[__namespace][fnName] = fn;
  }
};
utils.def("dom.attr", function(key) {
  console.log("dom.attr");
});
utils.def("dom.html", function(html) {
  console.log("dom.html");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
});
utils.def("string.trim", function() {
  console.log("string.trim");
});
utils.dom.attr("src");
utils.string.trim("aa");
console.dir(utils);
