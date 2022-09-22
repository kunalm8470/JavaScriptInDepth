'use strict';

const add = (a, b) => {
    if (typeof a !== 'number') {
        throw new Error('a should be a number');
    }

    if (typeof b !== 'number') {
        throw new Error('b should be a number');
    }

    return a + b;
};

const subtract = (a, b) => {
    if (typeof a !== 'number') {
        throw new Error('a should be a number');
    }

    if (typeof b !== 'number') {
        throw new Error('b should be a number');
    }

    return a - b;
};

const multiply = (a, b) => {
    if (typeof a !== 'number') {
        throw new Error('a should be a number');
    }

    if (typeof b !== 'number') {
        throw new Error('b should be a number');
    }

    return a * b;
};

const divide = (a, b) => {
    if (typeof a !== 'number') {
        throw new Error('a should be a number');
    }

    if (typeof b !== 'number') {
        throw new Error('b should be a number');
    }

    return a / b;
};

module.exports = {
    add,
    subtract,
    multiply,
    divide
};
