var isRunning = true;

while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 3) {
        console.log('Argentina will win copa this year')
        isRunning = false;
    }
    else {
        console.log(rand+" attempt"+'. It is never happen to us')
    }
}