
Function.prototype.call3 = function (context) {
    var context = context || window
    context = Object(context)
    context.fn = this
    var args = []
    for (var i = 1, l = arguments.length; i < l; i++) {
        args.push('arguments[' + i + ']')
    }
    var result = eval('context.fn(' + args + ')')
    delete context.fn
    return result
}

Function.prototype.call4 = function (context) {
    var context = context || window
    context = Object(context)
    context.fn = this
    var args = []
    for (var i = 1, l = arguments.length; i < l; i++) {
        args.push(arguments[i])
    }
    var result = context.fn(...args)
    delete context.fn
    return result
}