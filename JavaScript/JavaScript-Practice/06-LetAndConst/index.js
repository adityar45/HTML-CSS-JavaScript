//let & cost declarations are Hoisted

//Here, we can access b but not a as it is no declared before this line and declared as let.
//temporal dead zone -> ends when interpteter finds a 
//Reference error : when you are trying to access variable whose memory is not created 
//Syntax error : missing initializer in const declaration
                //'a' has already been declared
//Type error : Assignment to const variable

//to avoid this : 
//console.log(a);
console.log(b); //undefined
let a = 10;
var b = 20;
console.log(b); //20
