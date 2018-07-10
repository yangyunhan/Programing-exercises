//v1
var timeStamp = new Date().getTime()

//v2
var timeStamp = (new Date()).valueOf()

//v3
/**
 * 过程解析：
 * 先做new Date()，在做加号运算
 * 加号运算相当于Number(new Date())
 * Number操作对象，将对象转化为ToPrimitive(new Date())
 * 因为期望转化为数字，所以调用了new Date的valueOf()，否则调用对象的toString()
 * 返回了数字类型的时间戳
 */
var timeStamp = +new Date()