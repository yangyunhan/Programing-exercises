var str = "{{name}}很厉害，才{{age}}岁";
var obj = {name: '周杰伦', age: 15};

function fun(str, obj){
    var arr = str.match(/{{[a-zA-Z\d]+}}/g)
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].replace(/{{|}}/g,'')
        str = str.replace('{{'+arr[i]+'}}',obj[arr[i]])
    }
    return str
}
console.log(fun(str, obj))