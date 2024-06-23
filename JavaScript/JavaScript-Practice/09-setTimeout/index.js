//setTimeout - using var
//Here, copy of i refers to the same memory location  
function x() {
    for(var i = 0; i <= 5; i++) {
        setTimeout( function () {
            console.log(i)
        }, i * 1000);
    }
    console.log("Hello JavaScript from x()");
}
//x();


//How to fix this ?
//it shouldn't refer to the same memory location everytime
//wrap the setTimeout in another function and pass the value

function z() {
    for(var k = 0; k <= 5; k++) {

        function close(k) {   
            setTimeout( function () {
            console.log(k)
        }, k * 1000);
        }
        close(k);
    }
    console.log("Hello JavaScript from z()");
}
z();

//setTimeout - using let
// j refers to a separate copy each time its value is change.
//coz j is block scope it creates new copy everytime the loop is executed
function y() {
    for(let j = 0; j < 5; j++) {
        setTimeout( function () {
            console.log(j)
        }, j * 1000);
    }
    console.log("Hello JavaScript from y()");
}
//y();

