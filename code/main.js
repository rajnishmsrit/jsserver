
function outer() {
    var x = 4;
    function inner() {
        x--;
        console.log("X value is :: ", x)
    }
    inner();
}

outer();
outer();
outer();