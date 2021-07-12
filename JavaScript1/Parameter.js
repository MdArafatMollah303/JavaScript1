var arr1 = [34, 12, 80];
var arr2 = [34, 12, 40];

function arr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    
    }
    console.log(sum)
}

arr(arr1);
arr(arr2)