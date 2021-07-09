var arr = [32, 45, 21, 89, 30];
//arr.reverse();
//console.log(arr);

for (var i = 0; i < arr.length / 2; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
     arr[arr.length - 1 - i]=temp;
}
console.log(arr);