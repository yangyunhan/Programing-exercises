//需求
//实现一个render(template, context)方法，将template中的占位符用context填充
//要求
//不需要有控制流成分，只要有变量替换功能；
//被转义的分隔符不应被渲染，分隔符与变量之间允许有空白字符
/**
 * var obj = {name: '二月', age: "15"}
 * var str = "{{name}}很厉害，才{{age}}岁"
 * 输出：二月很厉害，才15岁
 */

var str = "{{name}}很厉害，才{{age}}岁"
var obj = {name: '二月',age: 15}
function test(str, obj){
    let _s = str.replace(/\{\{(\w+)\}\}/g,'$1')
    let result
    for(let k in obj){
        _s = _s.replace(new RegExp(k,'g'), obj[k])
    }
    return _s
}
const s = test(str, obj)