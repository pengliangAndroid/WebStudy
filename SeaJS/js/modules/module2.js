define(function(require,exports,module){
    let name = "我是module2中的内容";
    function foo2(){
        console.log(name);
    }

    module.exports = foo2;
});