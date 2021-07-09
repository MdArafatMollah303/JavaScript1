var obj1 = {
    a: 40,
    b: 23
    
}
var obj2 = {
    a: 400,
    b: 23
    
}
if (obj1.a == obj2.a && obj1.b === obj2.b) {
    console.log(true)
}
else {
    console.log(false)
}

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));