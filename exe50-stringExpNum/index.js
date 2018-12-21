/**
 * 思路：正则表达式匹配，判断字符串是否能表示数字
 * @param {String} s 
 */
function isNumeric(s){
    return s.match(/^[\+\-]?[0-9]*(\.[0-9]*)?([eE][\+\-]?[0-9]+)?$/)
}