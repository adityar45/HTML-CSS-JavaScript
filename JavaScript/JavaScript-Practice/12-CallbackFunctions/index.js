//What is callback func in js ->
//A function passed to another function
//gives the power of asynchronous does not wait for the setTimeout to finish

setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}

//y is a callback function
x(function y() {
    console.log("y");
})

//Javascript is a synchronous and single threaded language

//Blocking the main thread

//Deep about event listeners

//Closures Demo with event listeners

//Scope Demo With Event Listeners

//Garbage collection & removeEventListeners

function attachEventListeners() {
document.getElementById("call").addEventListener("click", function xyz() {
    console.log("Button clicked !");
});
}

attachEventListeners();


