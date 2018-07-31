//原型继承，所有实例共享属性，无法向Parent传参，construct无论是以new Parent实例的方式创建还是直接改变Child的原型及构造函数，其对应的子类／父类都会跟着改变
function Parent() {
    this.name = 'kevin';
}
Parent.prototype.getName = function () {
    console.log(this.name);
}
function Child() { }
Child.prototype = new Parent();
var child1 = new Child();
console.log(child1.getName())
//Child的构造函数是Parent，不正确
function Child() { }
Child.prototype = Parent.prototype
Child.prototype.constructor = Child
var child2 = new Child()
//此时，Parent的构造函数是Child，不正确
//这个问题有两种解决方案：一是改用构造函数式继承，二是通过空函数传递原型

//构造函数式继承(经典继承)，解决了原型的问题，但是创建实例时会创建一遍方法
function Parent() {
    this.name = 'kevin';
}
function Child(name, age) {
    Parent.call(this, name, age)
}
var child1 = new Child('c1',20);

//组合继承，最常用的继承方式，缺点是会调用两次父构造函数。
function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
    console.log(this.name)
}
function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
var child1 = new Child('kevin', '18');
console.log(child1)

//寄生组合式继承
function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
    console.log(this.name)
}
function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}
// 关键的三步
var F = function () { };
F.prototype = Parent.prototype;
Child.prototype = new F();

var child1 = new Child('kevin', '18');
console.log(child1);

function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);