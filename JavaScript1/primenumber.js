var n = 29;
for (i = 2; i < n - 1; i++){
    if (n % i == 0) {
        console.log('not prime')
        break
    }
    else {
        console.log('prime')
        break;
    }
}

//functional

function isPrime(n) {
    for (i = 2; i < n - 1; i++) {
        if (n % i == 0) {
            return 'Not a Prime number'
        }
    }
        return 'Prime Number'
}
var result = isPrime(13);
console.log(result)