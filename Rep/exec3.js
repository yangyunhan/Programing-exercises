//去掉字符串左右两边的空格
//非正则
function trim(str){
    let start, end
    for(let i = 0; i < str.length; i++){
        if(str[i]!==" "){
            start = i
            break
        }
    }
    for(let i = str.length-1;i>0;i--){
        if(str[i]!==' '){
            end=i
            break
        }
    }
    return str.substring(start, end+1)
}
let str = "  jaw il"

//正则
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g,"")
}