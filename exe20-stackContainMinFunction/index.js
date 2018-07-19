/**
 * 思路：应用一个辅助栈，压的时候，如果A栈的压入比B栈压入大，B栈不压，，，，小于等于，
 * AB栈同时压入，出栈，如果，AB栈顶元素不等，A出，B不出。
 */
var stack1 = [];
var stack2 = [];
function push(value) {
    stack1.push(value);
    if (stack2.length === 0)
        stack2.push(value);
    else if (value <= stack2[stack2.length - 1])
        stack2.push(value);
}
function pop() {
    if (stack1[stack1.length - 1] === stack2[stack2.length - 1])
        stack2.pop();
    stack1.pop();
}
function top() {
    return stack1[stack1.length - 1];
}
function min() {
    return stack2[stack2.length - 1];
}