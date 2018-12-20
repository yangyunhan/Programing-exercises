function f(){
    clearInterval(timer)
}
var timer = setInterval(f, 1000)

function f(){
    setTimeout(f, 1000)
}
setTimeout(f, 1000)