function outer() {

    var a = 10;

    function inner() {
        console.log(a);
    }

    a = 20;

    return inner;
}

//use of double parantheses
outer()();

