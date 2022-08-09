function Shape(length, width) {
    this.length = length;
    this.width = width;

    this.draw = function() {
        console.log("Width = " + width);
        console.log("Length = " + length);
    }; // per object
}

// draw3d will be shared across all the instance of the Shape
Shape.prototype.draw3d = function() { // On the function, static methods in C#
    console.log('Drawing in 3D');
};

var square = new Shape(1, 1);
var rectangle = new Shape(2, 3);

console.log(square.__proto__) // Shape.constructor
console.log(square.__proto__.__proto__) // Object constructor
console.log(square.__proto__.__proto__.__proto__) // Object constructor

debugger;

var obj = {
    a: 10,
    b: 20,
    c: 30
};

for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log("Key = " + key);
        console.log("Value = " + obj[key]);
    }
}

var a = [1, 2, 3]; // Gets converted to var a = new Array(); a[0] = 1; a[1] = 2; a[3] = 3;

Array.prototype.double = function() {
    for (var i = 0; i < this.length; i++) {
        this[i] = 2 * this[i]; 
    }

    return this;
};

var doubledArray = a.double();

console.log(a.__proto__); // Array.prototype
console.log(a.__proto__.__proto__); // Object.prototype
console.log(a.__proto__.__proto__.__proto__); // null


var str = "aaa";

String.prototype.repeatThreeTimes = function() {
    return this + this + this;
};

var repeatedStringThreeTimes = str.repeatThreeTimes();

// IEEE 754 double precision (System.Double)
var dNum = 2;

Number.prototype.isEven = function() {
    return this % 2 === 0;
};

var is4Even = (4).isEven();

debugger;