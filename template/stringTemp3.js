function a(str, obj){
    var str1 = str
    for(var key in obj){
        var re = new RegExp("{{" + key + "}}", 'g');
        str1 = str1.replace(re, obj[key]);
    }
    console.log(str1)
}
const str = "{{name}}很厉害name害{{name}}，才{{age}}岁";
const obj = {name: 'jawil', age: 15}
a(str, obj)