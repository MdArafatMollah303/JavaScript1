// var i = 1;
// var factorial = 1;
// while (i <= 5) {

//     factorial = factorial * i;
//     i++;
//     console.log(factorial)
// }

function fact(number) {
var i = 1;
var factorial = 1;
while (i <= number) {

    factorial = factorial * i;
    i++;
   
    }
    return factorial;
}
var facto = fact(5);
console.log(facto)