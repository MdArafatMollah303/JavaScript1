var str = 'hello programmers, i am back        with full confidence';
console.log(str.length);
var count = 0;
for (var i = 0; i < str.length; i++){
    if (str[i] == ' ' && str[i - 1] == ' ') {
        count++
    }
}
console.log(count)