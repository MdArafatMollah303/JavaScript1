function add() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++){
        sum=sum+arguments[i]
    }
    console.log(sum)
}
add(10,43,56,76,33,67);