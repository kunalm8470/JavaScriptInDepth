'use strict';

const sleep = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve();
        }, seconds * 1000);
    });
};

const range = {
    from: 1,
    to: 10,

    // 1. Add the Symbol.asyncIterator key
    // This is called initially
    [Symbol.asyncIterator]() {
        // We don't want to mutate the this.from
        this.current = this.from;

        return this;
    },

    // 2. Override the next method
    // This is called the subsequent times
    // next method should return a promise
    async next() {
        await sleep(2);

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

// Async generators
(async() => {
    // for await..of
    for await (const item of range) {
        console.log(item);
    }
})();
