//与call不同，除了有context参数，还有一个arr参数，直接是参数数组
Function.prototype.apply2 = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;
    var result;
    if (!arr) {
        result = context.fn();
    } else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')');
    }
    delete context.fn
    return result;
}

var value = 2;
var obj = {
    value: 1
}
function bar(name, age) {
    return {
        value: this.value,
        name: name,
        age: age
    }
}
bar() // value: 2
bar.apply2() // value: undefined
bar.apply2(obj, ['kevin', 18]); // value: 1