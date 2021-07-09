/*var arr = [10, 4, 5, 45, 27, 15, 28, 21];
var find = 210;
for (var i = 0; i < arr.length; i++){
    if (arr[i] === 21) {
        console.log('Data found at the index of ' + i);
        break;
    }
    else {
        console.log('Data not found');
        break;
    }
}
*/
var arr = [10, 4, 5, 45, 27, 15, 28, 21];
var find = 210;
var isFound = false;
for (var i = 0; i < arr.length; i++){
    if (arr[i] === 210) {
        console.log('Data found at the index of ' + i);
        isFound === true;
        break;
    }
}

if (!isFound) {
    console.log('Data not found')
}

