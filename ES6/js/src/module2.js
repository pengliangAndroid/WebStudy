//暴露模块：采用统一暴露的方式

function fn1() {
    console.log('我是 module2 中的 fn1');
}

function fn2() {
    console.log('我是 module2 中的 fn2');
}

//统一暴露
export { fn1, fn2 };