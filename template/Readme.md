```javascript
let str = "{{name}}很厉害，才{{age}}岁"
let obj = {name: '二月', age: 15}
function test(str, obj){
    let _s = str.replace(/\{\{(\w+)\}\}/g, '$1')
    let result
    for(let k in obj) {
      _s = _s.replace(new RegExp(k, 'g'), obj[k])
    }
  return _s
}
const s = test(str, obj)
```
用 for in 循环完全没必要，能不用 for in 尽量不要用 for in，for in 会遍历自身以及原型链所有的属性。

```javascript
const div = document.createElement('div');
let m = 0;
for (let k in div) {
  m++;
}
let n = 0;
console.log(m); // 231
console.log(Object.keys(div).length); // 0
```

- 可以看出for in的低效率
- React的Virtual DOM的思想和优越性

其他获取对象key值的方法：

- Object.key()
- Object.getOwnPropertyNames()
- Reflect.ownKeys()

区别

> for...in循环：会遍历对象自身的属性，以及原型属性，for...in 循环只遍历可枚举(不包括 enumerable为 false )属性。像 Array 和 Object 使用内置构造函数所创建的对象都会继承自 Object.prototype 和 String.prototype 的不可枚举属性;

Object.key()：可以得到自身可枚举的属性,但得不到原型链上的属性;

Object.getOwnPropertyNames()：可以得到自身所有的属性(包括不可枚举),但得不到原型链上的属性, Symbols 属性也得不到.

Reflect.ownKeys：该方法用于返回对象的所有属性，基本等同于 Object.getOwnPropertyNames() 与 Object.getOwnPropertySymbols 之和。

```javascript
const parent = {
  a: 1,
  b: 2,
  c: 3
};
const child = {
  d: 4,
  e: 5,
  [Symbol()]: 6
};
child.__proto__ = parent;
Object.defineProperty(child, "d", { enumerable: false });

for (var attr in child) {
  console.log("for...in:", attr);// a,b,c,e
}
console.log("Object.keys:", Object.keys(child));// [ 'e' ]
console.log("Object.getOwnPropertyNames:", Object.getOwnPropertyNames(child)); // [ 'd', 'e' ]
console.log("Reflect.ownKeys:", Reflect.ownKeys(child)); //  [ 'd', 'e', Symbol() ]
```

材料：
- [https://github.com/jawil/blog/issues/32](https://github.com/jawil/blog/issues/32)