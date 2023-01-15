(function(){
    setTimeout(console.log("First line"), 2000);
    setTimeout(
        (function(){console.log("4")})()
        , 2000);
    })()
    setTimeout(function(){console.log("late execution")}, 2000)
    setTimeout(console.log("3"), 1000);