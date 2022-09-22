'use strict';

// This will get all the exported members
// const arithmeticOperations = require('./arithmetic-operations');

// require function will only work in Node.js
const { subtract } = require('./arithmetic-operations');

console.log(subtract(2, 3));

