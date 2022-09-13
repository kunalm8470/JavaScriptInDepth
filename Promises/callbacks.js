'use strict';

const boilWater = function(cb) {
    setTimeout(function(){
        return cb('Water is boiling');
    }, 2 * 1000);
};

const addTeaLeaves = function(cb) {
    setTimeout(function(){
        return cb('Done adding tea leaves');
    }, 2 * 1000);
};

const strainMixture = function(cb) {
    setTimeout(function(){
        return cb('Starining tea leaves done');
    }, 2 * 1000);
};

const addMilkAndSugar = function(cb) {
    setTimeout(function(){
        return cb('Add milk and sugar done');
    }, 2 * 1000);
};

// Callback hell example
// Pyramid of doom example
const makeTea = function(cb){
    return boilWater(function(boilWaterResult) {
        console.log(boilWaterResult);

        return addTeaLeaves(function(addTeaLeavesResult) {
            console.log(addTeaLeavesResult);

            return strainMixture(function(strainMixtureResult) {
                console.log(strainMixtureResult);

                return addMilkAndSugar(function(addMilkAndSugarResult) {
                    console.log(addMilkAndSugarResult);

                    if (cb === 'function') {
                        return cb('Tea is ready');
                    }
                });
            });
        });
    });
};

makeTea(function(teaResult) {
    console.log(teaResult);
});
