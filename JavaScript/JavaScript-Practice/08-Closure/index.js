//Closures in JS -> 
//A function bundled together with its lexical scope forms a closure
/*Uses :
*Module Design pattern
*Currying
*Function like once
*maintaining state in async world
*setTimeouts
*Iterators
*and many more
*/
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;  //returning a function y()
}

var z = x(); 
console.log(z); //it will return the whole function y
z(); //7 as z contains function alongwith its lexical parent scope and there a is present.

function a() {
    var b = 7;
    function c() {
        console.log(b);
    }
    var b = 100;
    return c;  //returning a function y()
}

var d = a();   
console.log(d); //returns the function c
d();  //Here b will point to its reference so the value is 100
