'use strict';

// Loop types are -
// while (condition)
// do { // body } (condition);
// for (var key in obj) -> To iterate over the objects
// for (let i = 0; i < length; i++) -> Regular for loop
// for (const item of some_iterable) -> for..of loop (It iterates on any iterable)

// TL:DR; Iterable is an object that can be iterated on using the for..of loop
// Long version is - Iterable is an object which implements iterator protocol

/* 
    { done: false, value: <iterable value> },
    { done: false, value: <iterable value> }
    { done: true, value: undefined }
*/

/*
    To make a regular object an iterable object
    we need add to property of Symbol.iterator

    we have to give the custom implementation of next method
*/
// Making a custom iterator
var range = {
    from: 1,
    to: 10,

    // 1. Add the Symbol.iterator key
    // This is called initially
    [Symbol.iterator]() {
        // We don't want to mutate the this.from
        this.current = this.from;

        return this;
    },

    // 2. Override the next method
    // This is called the subsequent times
    next() {
        if (this.current <= this.to) {
            return  {
                done: false,
                value: this.current++
            };
        }

        return {
            done: true,
            value: undefined
        };
    }
};

// Use your custom iterator to iterate on the custom iterable
for (const item of range) {
    console.log(item);
}

// Built in iterators are - strings and arrays
const a = 'A long string';
for (const character of a) {
    console.log(`${character}\n`);
}

const arr = [1, 2, 3, 4, 5];
for (const item of arr) {
    console.log(item);
}