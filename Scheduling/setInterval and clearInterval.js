'use strict';

/*
    It will repeatedly call a function
    after a specified timeout.

    Signature -

    const timerId = setInterval(function(arg1, arg2, ... argN) {

    }, DELAY_IN_MILLISEC, arg1, arg2, ..., argN);
*/

// Print every second
// setInterval(() => {
//     console.log(new Date());
// }, 1000);

const timerId = setInterval(function() {
    console.log(new Date());
}, 1000);

clearInterval(timerId);