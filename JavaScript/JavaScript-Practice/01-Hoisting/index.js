//Hoisting in JS ->
//you can access the variables and functions before u initialize it.

//getName2(); //if we access arrow function here, will say undefined
getName3();

console.log(x);  //will print undefined here

var x = 7;

// function getName() {
//     console.log("Hello Javascript !");
// }

console.log(getName); //will print the function itself

//Array function
//acts like a variable
getName2 = () => {
    console.log("hello javaScript !!!");
}

//Function
var getName3 = function () {

}



