function sum(a, b) {
    return a + b;
}

sum(1, 2);

var calculatorObj = {
    add: function() {
        var result1 = this.a + this.b;

        var argumentSum = 0;
        for (var i = 1; i < arguments.length; i++) {
            argumentSum += arguments[i];
        }
        
        return result1 + argumentSum;
    },
    subtract: function() {
        return this.a - this.b;
    },
    multiply: function() {
        return this.a * this.b;
    },
    divide: function() {
        return this.a / this.b;
    }
};

var obj = {
    a: 3,
    b: 2
};

var obj2 = {
    a: 4
};

var a = calculatorObj.add.call(obj, 5, 6, 7, 9, 0, 0, 1, 8); // call comma separated arguments
var b = calculatorObj.add.call(obj2, 4, 3);

var c = calculatorObj.add.apply(obj, [5, 6, 7, 9, 0, 0, 1, 8]); // argument in an array
var d = calculatorObj.add.apply(null, [5, 6, 7, 9, 0, 0, 1, 8]);

var objNull = {
    a: null,
    b: null
};
var e = calculatorObj.add.apply(objNull, [5, 6, 7, 9, 0, 0, 1, 8]);

var boundFunction = calculatorObj.add.bind(obj, 5, 6, 7, 9, 0, 0, 1, 8);

console.log(boundFunction());
console.log(boundFunction());

debugger;