function sum() {
    var result = 0
    for (var i = 0, l = arguments.length; i < l; i++) {
        result += (!isNaN(arguments[i]) && window.parseFloat(arguments[i])) || 0;
    }
    return result.toFixed(3) * 1000 / 1000;
}