'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//暴露模块：采用统一暴露的方式

function fn1() {
    console.log('我是 module2 中的 fn1');
}

function fn2() {
    console.log('我是 module2 中的 fn2');
}

//统一暴露
exports.fn1 = fn1;
exports.fn2 = fn2;