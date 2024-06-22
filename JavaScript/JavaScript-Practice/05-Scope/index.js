//Scope of variables
//Lexical environment -> local memory alongwith lexical environment of its parents.
//Scope chain -> going from local scope to parent scope and further

//a() is lexically inside global scope
//c() is lexically inside a()
var b = 7;

function a() {
    //console.log(b);
    var d = 30;
    c();
    function c() {
        console.log(b);
    }
}

//here 7 will show, the var b can be accessed outside the function
a();

//it will say not defined as its defined inside the function
//console.log(d);




 





