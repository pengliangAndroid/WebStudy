define(function(require,exports,module){
    let name = "我是module3中的内容";
    function foo3(){
        console.log(name);
    }

    exports.module3 = {foo3};
});