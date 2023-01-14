(function(){
    setTimeout(
        (function(){console.log("4")})()
        , 2000);
    setTimeout(console.log("3"), 1000);
})()