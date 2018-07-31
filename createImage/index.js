//三种方法创建image
/**
 * <div id="d1"></div>
 */
function a(){
    document.getElementById('d1').innerHTML = "<img src='xxx'>"
    document.get
}
a()

function b(){
    var div = document.getElementById('d1')
    var img = document.createElement("img")
    img.src = 'xxx'
    div.appendChild(img)
}
b()

function c(){
    var img = new Image()
    img.src = 'xxx'
    document.getElementById('d1').appendChild(img)
}
c()