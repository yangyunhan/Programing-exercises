//原型继承，所有实例共享属性，无法向Parent传参
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

//寄生式继承，解决了原型的问题，但是创建实例时会创建一遍方法
function Parent() {
    this.name = 'kevin';
}
function Child() {
    Parent.call(this)
}
Child.prototype = new Parent();
var child1 = new Child();

//组合继承，最常用的继承方式
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
var child1 = new Child('kevin', '18');
console.log(child1)

//寄生组合式继承
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
    console.log(this.name)
}
function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}
// 关键的三步
var F = function () {};
F.prototype = Parent.prototype;
Child.prototype = new F();

var child1 = new Child('kevin', '18');
console.log(child1);

function object(o) {
    function F() {}
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