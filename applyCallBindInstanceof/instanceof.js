//instanceof 的内部实现
while(x.__proto__ !== null){
    if(x.__proto__ === y.prototype){
        return true;
        break;
    }
    x.__proto__ = x.__proto__.__proto__;
}
if(x.__proto__ == null) return false;