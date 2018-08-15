function jsonp(url, data, callback){
    var dataString = url.indexOf('?') == -1 ? '?': '&'
    for(var key in data){
        dataString += key + '=' + data[key] + '&'
    }
    var cbFuncName = 'jsonpFunc_' + Math.random().toString().replace('.', '')
    dataString += 'callback=' + cbFuncName

    var script = document.createElement('script')
    script.src = url + dataString
    window[cbFuncName] = function(data){
        callback(data)
    }
    document.body.appendChild(script)
}
function callback(data){
    console.log(data)
}