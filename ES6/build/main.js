'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.foo1)();
(0, _module.foo2)();
(0, _module2.fn1)();
(0, _module2.fn2)();

(0, _module4.default)();
_module6.default.foo();
console.log(_module6.default.name);

(0, _jquery2.default)(function () {
    console.log("on doc ready");
});