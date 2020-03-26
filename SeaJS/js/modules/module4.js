define(function(require,exports,module){
    let name = "我是module4中的内容";

    let myModule2 = require('./module2');
    myModule2();

    require.async('./module3',function(myModule3){
        myModule3.module3.foo3();
    });

    function foo4(){
        console.log(name);
    }

    exports.foo4 = foo4;
});