// Regular function
function sum(a, b) {
    return a + b;
}

// Function expression
var volume = function(l, b, h) {
    return l * b * h;
};

sum(1, 2);
volume(1, 2, 3);

var o = {
    divide: function(a, b) {    // Pre ES6
       var c = a / b;
       return c;
    },

    divideEs6: (a, b) => { // ES6 onwards
        var c = a / b;
        return c; 
    }
};

o.divide(1, 2);

// this of the global scope GlobalThis (Node.js) and Window (Browser)

var self = this;

// Constructor function
var Shape = function (length, width) {
    this.length = length;  // -> this of shape()
    this.width = width;



    console.log(self === this);

    this.draw = function() {
        console.log('Drawing the shape ' + this.length + ' ' + this.width);
    };
    debugger;
}

var square = new Shape(1, 2);

square.draw();

var rectangle = new Shape(2, 4);



var arrow_shape = (length, width) => {
    this.length = length;
    this.width = width;

    console.log(self === this);

    debugger;
};

var n = arrow_shape(1, 2);