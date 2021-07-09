var day = new Date();
var toDay = day.getDay();

console.log(toDay);

if (toDay === 0) {
    console.log('Sunday')
}
else if (toDay === 1) {
    console.log('Monday')
}
else if (toDay === 2) {
    console.log('Tuesday')
}
else if (toDay === 3) {
    console.log('Wednesday')
}
else if (toDay === 4) {
    console.log('Thrusday')
}
else if (toDay === 5) {
    console.log('Friday')
}
else {
    console.log('Saturday')
}

//switch statement
