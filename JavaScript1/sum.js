/*var sum =0
for (i = 0; i <= 10; i++){
    sum = sum + i;
    console.log(sum)
}*/

var sum = 0;
for (i = 1; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(sum+'+'+i+'='+(sum+i))
        sum += i;
        }
}
console.log('result =' + sum);
