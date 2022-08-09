function volume(l) {
    return function(w) {
        console.log("Entering Inner");

        return function (h) {
            debugger;

            console.log("Inner most");
            return l * w * h;
        };
    };
}

// Function currying (higher order function)
const vol1 = volume(2)(3)(4);

// Unnamed function wrapped in a parenthesis and invoke it ASAP
(function() {
    console.log("Inside IIFE");

    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log(i);

})();

// Revealing module pattern
const userService = (function() {

    const privateFunction = function() {
        console.log("I am a private function");
    };

    const getAllUsers = function() {
        privateFunction();

        console.log("Making HTTP call to backend to fetch users");
    };


    return {
        // getAllUsers: getAllUsers // Redundant way to do
        getAllUsers // ES6 inferred property names
    };
})();

userService.getAllUsers();

debugger;