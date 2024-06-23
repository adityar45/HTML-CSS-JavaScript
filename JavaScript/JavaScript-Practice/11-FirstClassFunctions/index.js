//a()   -> will run
//b()   -> will throw error : b is not defined as it will not treat it like a function first

//Function Statement aka Function Declaration
function a() {
    console.log("a called");
}
a();

//Function Expressions
var b = function () {
    console.log("b called");
}
b();

//Anonymous Functions
var c = function () {
    console.log("c called");
}
c();

//Named Function Expression
var d = function xyz() {
    console.log("d called");
}
d();
//xyz() -> Error : xyz is not defined

//Diff betn Parameters and Arguments
/*Placeholder in function are known as parameters and the actual value we passed
while calling is called as argument */

//First Class Functions -> (First class citizens)
//The ability of the func to be used as values, passing as arguments, return a function

//Arrow Functions  


