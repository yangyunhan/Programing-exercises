/**
 * 介绍：call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。
 * 思路：
 * 1、将函数设为对象的属性
 * 2、执行该函数
 * 3、删除该函数
 * @param {Object} context 
 */
Function.prototype.call2 = function (context) {
    //1
    var context = context || window
    context.fn = this
    //2
    var args = []
    for (var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args + ')')
    //3
    delete context.fn
    return result
}
var value = 2;
var obj = { value: 1 }
function bar(name, age) {
    return {
        value: this.value,
        name: name,
        age: age
    }
}
bar() // value: 2
bar.call2(null) // value: 2
bar.call2(obj, 'kevin', 18) // value: 1