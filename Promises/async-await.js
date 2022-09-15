'use strict';

// async-await it came in ES8 - 2017

const boilWater = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve('Water is boiling');
        }, 2 * 1000);
    });
};

const addTeaLeaves = function () {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve('Done adding tea leaves');
        }, 2 * 1000);
    });
};

const strainMixture = function () {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve('Starining tea leaves done');
        }, 2 * 1000);
    });
};

const addMilkAndSugar = function () {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve('Add milk and sugar done');
        }, 2 * 1000);
    });
};

/*
    Pre requisite to use async-await syntax is
    function should return a promise

    await keyword doesn't work inside of a regular function,
    it need to be marked with async keyword
*/
const makeTea = async () => {
    try {
        console.log(await boilWater());

        console.log(await addTeaLeaves());

        console.log(await strainMixture());

        console.log(await addMilkAndSugar());

        return 'Tea is ready';
    } catch (err) {
        console.error('Tea making failed', err);
    }
};

// Caller methods should marked as async all the way up to top
(async() => {
    console.log(await makeTea());
})();

// One alternative is writing then in the caller method
(() => {
    makeTea()
    .then((teaResult) => {
        console.log(teaResult);
    });
})();


// Promise<number>
const asyncMethod = async () => {
    return 5;
};

/*
    Above code is similar to writing this -

    const asyncMethod = () => {
        return new Promise((resolve, reject) => {
            return resolve(5);
        });
    };
*/

const asyncMethod2 = async () => {
    throw new Error('Async error');
};

/*
    Above code is similar to writing this -
    
    const asyncMethod = () => {
        return new Promise((resolve, reject) => {
            return reject(throw new Error('Async error'));
        });
    };
*/

class SomeClass {
    // Class methods can also be async
    async someAsyncInstanceMethod() {
        return 5;
    }
}

const s1 = new SomeClass();

// Top level awaits
//await s1.someAsyncInstanceMethod();

//---------------------------------------------------------------------
// To make a custom promise
// make a thenable
// A thenable is just a class/constructor function with a then method
// The then method will have two callbacks "resolve" and "reject".

class Thenable {
    constructor(num) {
        this.num = num;
    }

    // Override the then method to make a custom promise
    then(resolve, reject) {
        setTimeout(() => {
            resolve(this.num);
        }, 2000);
    }
}

(async() => {
    // Custom promise
    const result = await new Thenable(2);

    console.log(result);
})();

debugger;