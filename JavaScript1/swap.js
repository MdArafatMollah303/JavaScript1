var a = 5;
var b = 7;
console.log('Before swap', a, b);
var temp = a;
a = b;
b = temp;
console.log('After swap', a, b);
//another process
var x = 5;
var y = 7;
console.log('Before swap', x, y);
x = x + y;
y = x - y;
x = x - y;
console.log('After swap', x, y);
//another process
var p = 5;
var q = 7;
console.log('Before swap', p, q);
[p, q] = [q, p];
console.log('After swap', p, q);