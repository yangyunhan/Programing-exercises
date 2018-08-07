/**
 * jq源码：
 * onload和onreadystatechange的区别是
 * IE（10）的script只支持onreadystatechange，不支持onload
 * FF到script只支持onload，不支持onreadystatechange
 */
var script = document.getElementById('scr');
script.src = 'xx.js'
script.onload = script.onreadystatechange = function(){
    if(/^(loaded|complete)$/.test(script.readyState)){
        script.onreadystatechange = null
    }
}
script.error = function(){}