//Block scope and Shadowing

var a = 10; //Global Scope
let b = 20; //In script scope not as global
const c = 30; //In script scope not as global

{
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(a); //100
    console.log(b); //200
    console.log(c); //300
}

//Known as Shadowing
console.log(a); //100
console.log(b); //20
console.log(c); //30


//Illegal shadowing let -> var but vice versa will work
//var -> let possible


//Scope rule is same for normal function and arrow function
