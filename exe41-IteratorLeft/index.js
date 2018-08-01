function LeftRotateString(str, n){
    var leftPart = str.slice(0, n)
    var rightPart = str.slice(n)
    return rightPart + '' + leftPart
}
function LeftRotateString(str, n){
    var len = str.length;
    if(len === 0) return "";
    n = n % len;
    str += str;
    return str.substr(n, len);
}