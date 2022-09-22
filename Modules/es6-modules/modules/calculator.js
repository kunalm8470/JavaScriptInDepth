'use strict';

// Destructuring way
// as operator can be used to give custom names in import
import { add, subtractTwoNumbers as subtract, multiply, divide } from './arithmeticOperations';

// Importing everything and storing in object
// import * as arithmeticOperationObj from './arithmeticOperations';
// arithmeticOperationObj.add();

const additionResult = add(2, 3);

/*
    Import function dynamically loads a
    module and will return a promise
*/
if (1 === 1) {
    import('./module1')
    .then((m) => {

    })
    .catch((err) => {

    });
} else {
    import('./module2')
    .then((m) => {

    })
    .catch((err) => {

    });
}

debugger;
