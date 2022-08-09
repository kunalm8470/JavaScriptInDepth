// var i;
// var i = undefined;

console.log(sum(2, 3));

// Regular syntax
function sum(a, b) {
    return a + b;
}

// Function expression
var subtract = function(a, b) {
    return a - b;
};

console.log(subtract(4, 3));


// console.log("Before for loop " + i);

// for (var i = 0; i < 10; i++) { // var has global scope
//     console.log("In for loop " + i);
// }

// console.log("Outside for loop " + i);



// console.log("Before for loop " + i);

// for (let i = 0; i < 10; i++) { // let has block-scope
//     console.log("In for loop " + i);
// }

// console.log("Outside for loop " + i);


// for (const i = 0; i < 10; i++) { // const has block-scope
//     console.log("In for loop " + i);
// }

// console.log("Outside for loop " + i);

const obj = {
    a: 10,
    b: 20
};

obj = {
    c: 10,
    d: 30
};

//obj.a++;

debugger;