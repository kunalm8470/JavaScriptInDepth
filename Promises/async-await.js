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

(async() => {
    console.log(await makeTea());
})();

debugger;