const apple = () => {
    console.log(this);
};


apple();


function data (n=5) {
    let a = 5;

    return a+n , a+1;
}

console.log(data())


// Use ? to make a parameter optional
function logger(message) {
    console.log("number of arguments passed: ", arguments.length);
    if (message === undefined) {
        console.log("please provide a message to be logged");
    }
    else {
        console.log(message);
    }
    console.log();
}
logger("Welcome to GFG!");
logger();