// var factorial = 1;
// for (var i = 1; i <= 5; i++){
   
//     factorial = factorial * i;
//     console.log('Factorial of '+i+' is '+factorial)
// }
//functional way
function factorialGet(n) {
   var factorial = 1;
    for (var i = 1; i <= n; i++){
        
        factorial = factorial * i;
        
    }
    return factorial;
}
var get = factorialGet(6);
console.log(get)
//factorialGet(10)