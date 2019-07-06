"use strict";
var Vnode = /** @class */ (function () {
    function Vnode(tag, attrs, children) {
        this.tag = tag;
        this.attrs = attrs;
        this.children = children;
    }
    return Vnode;
}());
var React = { createElement: '' };
React.createElement = function (tag, attrs, children) {
    return new Vnode(tag, attrs, children);
};
