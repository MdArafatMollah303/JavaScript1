var array = [23, 2, 3, 4, 1, 2, 3, 4, 6];
console.log(array.length)
var duplicate = [];
for (var i = 0; i < array.length; i++){
    if (array[i] == -1) {
        var index = duplicate.indexOf(array[i]);
    duplicate.push(array[i])
    }
}
console.log(index);
console.log(duplicate)
console.log(duplicate.length)