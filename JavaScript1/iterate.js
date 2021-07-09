var obj = {
    a: 50,
    b: 30,
    c:60
}
console.log('a' in obj)
for (var i in obj) {
    console.log(i);
    console.log(i+': '+obj[i])
}