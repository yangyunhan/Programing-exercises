/**
 * 思路：以.做为划分项，找到所有要查找的项的名字。逐渐赋值并查找。
 * @param {Object} obj 
 * @param {String} str 
 */
function parse(obj, str) {
    str.replace('[', '.').replace(']', '').split('.').map(el => obj = obj[el.trim()])
    return obj || 'undefined'
}