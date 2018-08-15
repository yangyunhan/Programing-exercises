function ajax(url, method){
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){}
    xhr.onloadstart = function(){}
    xhr.onload = function(){}
    xhr.open(method, url, true)
    xhr.setRequestHeader('Cache-Control', 3600)
    xhr.send()
}