var obj = {
    a: 50,
    b: 30,
    c:60
}
console.log(obj)
console.log(Object.keys(obj));
//console.log(Object.length(obj));
console.log(Object.entries(obj));
console.log(Object.values(obj));

var obj2 = Object.assign({},obj)
obj2.a = 100;
console.log(obj)
console.log(obj2)
