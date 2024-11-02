let count = 3;

const timer = setInterval(() => {
    if (count >= 1) {
        console.log(count);
        count--;
    }
    else{
        clearInterval(timer);
        console.log("Time's Up ! ");
    }
}, 1000);
