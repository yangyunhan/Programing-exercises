/**
 * 介绍：call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。
 * 思路：
 * 1、将函数设为对象的属性
 * 2、执行该函数
 * 3、删除该函数
 * @param {Object} context 
 */
Function.prototype.call2 = function (context) {
    var context = context || window
    //要获取调用call的函数，用this可以获取
    context.fn = this

    var args = []
    for (var i = 0; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args + ')')
    delete context.fn
    return result
}
//test
var value = 2;
var obj = {
    value: 1
}
function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}
bar.call2(null); 
console.log(bar.call2(obj, 'kevin', 18));