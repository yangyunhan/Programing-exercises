/**
 * 思路：new函数实现了：
 * 返回一个对象，对象可以访问构造器的原型
 * 对象可以访问构造器的属性
 * 如果构造器中返回了对象，则只能访问返回的对象；
 * 如果构造器中返回了普通类型的值，则只能访问构造器中的对象
 */
function objectFactory() {
    var obj = new Object(), Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
};
//test
