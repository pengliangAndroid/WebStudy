define(function(require){
    let module1 = require('./module1');

    console.log(module1.foo1());

    let module4 = require('./module4');

    module4.foo4();

});