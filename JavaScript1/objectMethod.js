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

var obj2 = Object.create(obj)
obj2.x = 100;
console.log(obj2)
