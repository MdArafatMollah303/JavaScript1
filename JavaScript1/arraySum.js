function arraySum(n) {
    var sum=0
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum
}
var array = [34, 56, 71, 21, 30];
var result=arraySum(array)

console.log(result);
