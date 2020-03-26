'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

//暴露模块：采用默认暴露的方式。
//默认暴露的方式可以暴露任意数据类型，暴露的是什么数据，接收到的就是什么数据

//语法格式：export default value;
exports.default = function () {
    console.log('我是 module3 中 default 方式暴露的函数');
};