function throttle(func, delay){
    var last = null
    return function(){
        var curr = +new Date()
        if(!last || curr - last > delay){
            func()
            last = curr
        }
    }
}

var fn = function(){
    console.log('be called');
}

setInterval(throttle(fn, 1000),10)