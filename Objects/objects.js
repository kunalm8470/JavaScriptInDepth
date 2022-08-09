// Object literal syntax
var o = {
    prop0: 0, // By default it will be writable and enumerable
    prop3: 1,
    prop4: new Date(),
    prop5: /[0-9]+/m
};

// Using new keyword constructor format
var o1 = new Object();

// Using Object.create() factory method
var o2 = Object.create(null);

// Attaching the properties to an object
o.prop1 = 2;

o[2 + 3] = 3; // ES6

o['prop2'] = 4;

// Copy object

// 1. Spread syntax (Shallow copy)
var m = { ... o };

// 2. for-in loop (Deep copy)
var copy1 = {};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        copy1[key] = o[key];
    }
}

// 3. JSON.parse + JSON.stringify (Deep copy)
var copy2 = JSON.parse(JSON.stringify(a));

// 4. lodash/underscore.js (Deep copy)
//var copy3 = _.deepCopy(o);

// For single line comments
/*
    For multi line comments
*/

// Delete certain properties from the object
delete o.prop5;
delete o['prop5'];
delete o['prop' + 5];

// Iterate over all the enumerable keys of an object
var keysArr = Object.keys(o); // ["prop0", "prop1", "prop3", ....]

Object.defineProperty(o, 'non-enumerated-prop', {
    enumerable: false,
    writable: false,
    value: 5
})

// In strict mode this will throw error
o['non-enumerated-prop'] = 50;

// Iterate over all the enumerable values
var valuesArr = Object.values(o);
//[0, 1, new Date(), /[0-9]/m]

var pairs = Object.entries(o);
/*
    [
        ["prop0", 0], // Each subarray will only contain 2 items
        ["prop1", 1],
        ["prop3", new Date()],
        ["prop4", /[0-9]m/]
    ]
*/

var reconstructedObj = Object.fromEntries(pairs);
// 2019