define(function (require,exports,module){
    let name = "我是module1中的内容"
    function foo1(){
        return name;
    }

    module.exports = {foo1};
});