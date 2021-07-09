
//for (var i = 0; i <= arr.length-1; i++){
 //   console.log(arr[i]);
//}
//
var sum = 0;
var arr = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
        sum = sum + arr[i];
    }

}
console.log(sum);