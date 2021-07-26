var arr = [56, 67, 34, 96, 80, 87];
var max = arr[0];
for (var i = 0; i < arr.length; i++){
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max)