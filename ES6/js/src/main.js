import {foo1,foo2} from './module1';
import {fn1,fn2} from './module2';

import myModule3 from './module3';
import myModule4 from './module4';

import $ from 'jquery';

foo1();
foo2();
fn1();
fn2();

myModule3();
myModule4.foo();
console.log(myModule4.name);

$(function(){
    console.log("on doc ready");
});