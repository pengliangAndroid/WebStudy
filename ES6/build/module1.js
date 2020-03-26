'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo1 = foo1;
exports.foo2 = foo2;
//暴露模块：采用分别暴露的方式

function foo1() {
    console.log('我是 module1 中的 foo1');
}

function foo2() {
    console.log('我是 module2 中的 foo2');
}

var arr = exports.arr = [1, 2, 3, 4, 5];