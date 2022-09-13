'use strict';

// Promisification is the process of converting a callback to a promise
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

// Promise.prototype.then is used to resolve a promise
const makeTea = () => {
    return new Promise((resolve, reject) => {
        return boilWater()
            .then((boilWaterResult) => {
                console.log(boilWaterResult);

                return addTeaLeaves()
                    .then((addTeaLeavesResult) => {
                        console.log(addTeaLeavesResult);

                        return strainMixture()
                            .then((strainMixtureResult) => {
                                console.log(strainMixtureResult);

                                return addMilkAndSugar()
                                    .then((addTeaLeavesResult) => {
                                        console.log(addTeaLeavesResult);

                                        return resolve('Tea is ready');
                                    });
                            });
                    });
            });
    });
};

makeTea()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error('Tea making failed', err);
});

debugger;
