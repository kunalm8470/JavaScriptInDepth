'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // literal syntax

// Constructor function way of declaring the array
// Give the upper bound in constructor
const arr2 = new Array();
arr2.push(1);
arr2.push(2);
arr2.push(3);

// Javascript arrays need not be of same type
const arr3 = [1, '2', 1111n, [1, 2, 3], null, undefined, { hello: "world" } ];

// O(1) operation, finding the length will be instantenous
console.log("No of items in arr3", arr3.length);

// Truncate the array by specifying a new length
const arr4 = [1, 2, 3, 4, 5, 6];
arr4.length = 4;

const obj = {
    message: 'Hello world'
};

// Array.prototype.isArray was introduced in ES6
const isArrayOrNot1 = Array.isArray(obj);
const isArrayOrNot2 = Array.isArray(arr4);

// Pre ES6
const isArrayOrNot3 = obj instanceof Array;

// Generate array given a specified length using Array.prototype.from
// Introduced in ES6
const generatedArray = Array.from({ length: 100 }, (v, k) => k++);

// [20, 60)
const slicedSubArray = generatedArray.slice(20, 60 + 1);

// Doesnt mutate the source array for primitives
slicedSubArray[0] = 2 * slicedSubArray[0];

/*
    Changes made in the subarray will be reflected in the source array
    if its Array of objects, because objects are passed by value
*/
const generatedObjArray = Array.from({ length: 100 }, (v, k) => {
    return {
        i: k++
    };
});

const slicedObjArray = generatedObjArray.slice(20, 60);

slicedObjArray[0].i *= 2;


const arr5 = [1, 2, 3, 4, 5, 6];

// Iterate over the array using Array.prototype.forEach
// Array.prototype.forEach will accept a callback with 3 params
// 1. current item
// 2. current index of the item
// 3. thisArg -> the reference of the array
arr5.forEach((item, idx, thisArg) => {
    console.log(item + " is in index: " + idx);
});


const arr6 = [];
// You can push 1 item at 1 time
arr6.push(10);
arr6.push(20);

// Pre ES6
Array.prototype.push.apply(arr6, [1, 2, 3]);

// After ES6
// 1. destructure the source array (arr5)
// 2. push multiple items
arr6.push(...arr5);

// To push the items in the front
// Good use case to implement Queue data structure in Javascript using arrays
const arr7 = [10, 20, 30, 40];
arr7.unshift(50);

// Pre ES6 way
Array.prototype.unshift.apply(arr7, [60, 70, 80]);

// ES6 way
arr7.unshift(...[100, 110, 120]);

// Array.prototype.concat does an immutable operation
// It doesn't mutate the source array
// It will return a new array based on the concat
const arr8 = arr6.concat(arr7);


// Array.prototype.indexOf gives the first found index of the specified item

// 1. Find the item in the array, given the item itself
// 2. Item is the primitive type (Number, null, undefined, BigInt, String)
const arr9 = [
    {
        name: 'John Doe',
        gender: 'M',
        age: 20
    },
    {
        name: 'Jane Doe',
        gender: 'F',
        age: 15
    },
    {
        name: 'John Smith',
        gender: 'M',
        age: 23
    },
    {
        name: 'Jane Smith',
        gender: 'F',
        age: 25
    }
];
const arr10 = [10, 20, 30, 40, 30, 40, 40, 50];
const foundIndex = arr10.indexOf(40);


// Array.prototype.lastIndexOf gives the last found index of the specified item
// 1. Find the item in the array, given the item itself
// 2. Item is the primitive type (Number, null, undefined, BigInt, String)
const foundIndex2 = arr10.lastIndexOf(40);

/*
    Array.prototype.findIndex gives the first found index by evaluating the callback function
*/
const foundIndex3 = arr10.findIndex((item, idx, thisArg) => item > 100);
const foundIndex4 = arr10.findIndex((item, idx, thisArg) => item === 40);
const foundIndex5 = arr9.findIndex(({ gender, age }, idx, thisArg) => gender === 'M' && age > 20);

/*
    Array.prototype.findLastIndex gives the last found index by evaluating the callback function
*/
//const foundIndex6 = arr10.findLastIndex((item, idx, thisArg) => item === 40);


/*
    Array.prototype.includes will return boolean true or false
    It will input a primitive type

    Array.prototype.includes was introduced in ES6
*/
const includesOrNot = arr10.includes(40);
//arr10.indexOf(40) !== -1


/*
    Array.prototype.some will accept a callback function and it will return true/false
    based on the evaulation.

    Array.prototype.some will return true if any element matches the callback

    Introduced in ES6

    Same as C# Enumerable.Any()
*/
const existsOrNot = arr9.some(({ gender, age }, idx, thisArg) => gender === 'M' && age > 40);

/*
    Array.prototype.every will accept a callback function and it will return true/false
    based on the evaulation.

    Array.prototype.some will return true if all the elements matches the callback

    Introduced in ES6

    Same as C# Enumerable.All()
*/
const allElementsSatisifiesCondition = arr10.every((item, idx, thisArg) => item < 100);


const arr11 = ['1', '3', '10', '-1', '100', '1000', '5'];
arr11.sort();

const arr12 = [1, 3, 10, -1, 100, 1000, 5];
arr12.sort((a, b) => a - b); // Implement the comparator function (a - b) is ascending order and (b - a) is descending
// Similar to Java/C# Compare()

arr12.sort((a, b) => b - a);

arr9.sort((a, b) => b.age - a.age);

const arr13 = [
    {
        name: 'John 13'
    },
    {
        name: 'John 10'
    },
    {
        name: 'John 001'
    },
    {
        name: 'Doner'
    },
    {
        name: 'Döner'
    }
];

// Locale agnostic way
// arr13.sort((a, b) => a.name - b.name);


// To preserve the locale sort using the collator's compare function
const collator = new Intl.Collator('tr', {
    sensitivity: 'base'
});


arr13.sort((a, b) => collator.compare(a.name, b.name));


const arr14 = [1, 2, 3, 4, 5];

const squareEvenIndices = (num, idx, thisArg) => {
    if (idx % 2 === 0) {
        return Math.pow(num, 2);
    }
    
    return num;
};

// Higher order functions
// Use case: To pass multiple parameters which is not supported by Array.prototype.map signature
// Custom function need not to match the signature
// But it should return a function which match the signature Array.prototype.map
const squareOddIndices = (param1, param2) => {
    return (num, idx, thisArg) => {
        if (idx % 2 !== 0) {
            return Math.pow(num, 2) + param1;
        }
        
        return num + param2;
    };
};

const arr15 = arr14.map(squareOddIndices(2, 3));

const arr16 = [
    {
        firstName: 'John',
        lastName: 'Doe'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe'
    },
    {
        firstName: 'John 2',
        lastName: 'Doe'
    },
    {
        firstName: 'Jane 2',
        lastName: 'Doe'
    }
];

// If complex mapping logic is not there
// Wrap the result object around a parenthesis
// 
// If complex mapping logic is there
// Use the return statement with multiple lines
const arr17 = arr16.map(({ firstName, lastName }) => ({ username: `${lastName}, ${firstName}` }));

/*
    Array.prototype.flat flattens the array by the specified depth
    If depth is not specified it will assume 1

    Similar to C# Enumerable.SelectMany but not same
*/
const arr18 = [
    [
        1, 2, 3, 
        [4, 4.1, 4.2, 4.3]
    ],
    [5, 6, 7, 8]
];

const flatteningDepth = 2;
const arr19 = arr18.flat(flatteningDepth);

const arr20 = [
    [
        {
            name: 'John Doe 1'
        },
        [
            [
                {
                    name: 'John Doe 2'
                },
                {
                    name: 'John Doe 3'
                }
            ]
        ],
        {
            name: 'John Doe 4'
        }
    ]
];

const arr21 = arr20.flat(4);


// Added in ES10 (2019)
// Array.prototype.flatMap will flatten the array + map each item also
// If an empty array is found, it will ignore the item from the result.
// Same as Enumerable.SelectMany in C#
const arr22 = [
    'Doe, Jane',
    'Doe, John',
    ''
];

const arr23 = arr22.flatMap((item) => {
    if (item === '') {
        return [];
    }

    return item.split(',');
});


const arr24 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 0 (acc) + 1 = 1 (acc)
// 


// Array.prototype.reduce will reduce the array to a single value
// We have to implement a reducer function (acc, curr, thisArg)
// It is same as Enumerable.Aggregate in LINQ
const initialValue = 0;

// Use case 1: Find the sum/products of all items in the array
const sum = arr24.reduce((acc, curr, thisArg) => acc + curr, initialValue);

const arr25 = [
    {
        name: 'John Doe',
        gender: 'M',
        age: 20
    },
    {
        name: 'Jane Doe',
        gender: 'F',
        age: 21
    },
    {
        name: 'John Doe Sr',
        gender: 'M',
        age: 52
    },
    {
        name: 'Jane Doe Sr',
        gender: 'F',
        age: 50
    }
];

/*
    {
        'M': [

        ],
        'F': [

        ]
    }
*/

// Use case 2: To group the array items in buckets
const reducedObject = arr25.reduce((acc, curr) => {
    // acc is Object.prototype -> acc[gender] -> walk up the prototype chain
    // acc[gender] will return undefined

    if (!acc[curr.gender]) {
        acc[curr.gender] = [
            curr
        ];
    } else {
        acc[curr.gender].push(curr);
    }


    return acc;
}, Object.create(null));

const arr26 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use case 3: Find the min/max element in an array
const initialMaxValue = arr26[0];
const maxEleInArray = arr26.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
}, initialMaxValue);

/*
    Array.prototype.reduceRight is same as Array.prototype.reduce but works in the opposite direction
*/
const arr27 = ['2', '3', '4', '5'];

const reducedRightValue = arr27.reduceRight((acc, curr) => {
    return acc + ',' + curr;
}, '');

/*
    Array.prototype.reverse will reverse the array in place (not returning a new array)
*/
const arr28 = ['a', 'b', 'c', 'd', 'e'];
arr28.reverse();

/*
    Array.prototype.filter will filter out the elements of an array
    based on callback function and it will return a new array


    Its same as Enumerable.Where in LINQ C#
*/
const arr29 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr30 = arr29.filter((item, idx, thisArg) => item % 2 !== 0);

const wrapFn1 = (param1, param2) => {
    return (item, idx, thisArg) => {
        item % 2 !== 0
        // && item > param1 -- Do some logic here
        // && item < param2
    };
};

const arr31 = arr29.filter(wrapFn1(4, 8));

/*
    To copy items in place we use this Array.prototype.copyWithin
    It will create a shallow copy in place and copy the number of items specified

    Introduced in ES6
*/
const arr32 = [1, 2, 3, 4, 5, 6];

arr32.copyWithin(2, 4);

/*
    delete operator just plugs an undefined in the specified index of the array
*/
const arr33 = [1, 2, 3, 4];
delete arr33[1];

/*
    Array.prototype.splice can be used to remove / add or array elements

    Case 1: If exactly 2 parameters are supplied to Array.prototype.splice, it will remove the items
    Case 2: If more than 2 parameters are supplied to Array.prototype.splice, it will add the items from the 3rd parameter
*/
const arr34 = [1, 2, 3, 4, 5, 6];
arr34.splice(2, 2); // Starting from index 2, delete 2 items

arr34.splice(2, 3, 10, 20, 30); // Starting from index 2, add 3 items

/*
    Array.prototype.shift is used to remove elements from beginning of the array

    Can be used to implement dequeue operation if implementing the queue data structure using Javascript
*/
const arr35 = [1, 2, 3, 4, 5, 6];
arr35.shift();
arr35.shift();

/*
    Array.prototype.pop is used to remove elements from end of the array

    Can be used to implement pop operation if implementing the stack data structure using Javascript
*/
const arr36 = [1, 2, 3, 4, 5, 6];
arr36.pop();
arr36.pop();

debugger;
