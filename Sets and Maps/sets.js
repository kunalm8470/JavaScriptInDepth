'use strict';

/*
    Sets are ES6+ feature

    Its mainly used to store the unique values.
*/
// Initialize a set using Set constructor
const set1 = new Set();

const arr = [1, 2, 2, 2, 3, 4, 4, 4, 5];

// By taking another array.
const set2 = new Set(arr);

const uniqueArr = [...set2]; // or const uniqueArr = Array.from(set2);

const set3 = new Set([1, 1, 'b', null, 2.22, 'bbb']);

/*
    To add items into the set, we use Set.prototype.add

    Its a function on the instance, and not a static function
*/
set1.add(1);
set1.add(1);
set1.add(1);
set1.add(2);
set1.add(3);

/*
    To check of the existence of an item in a set
    We use Set.prototype.has
*/
console.log(set1.has(-1) ? 'Found in set' : 'Not found in set');

/*
    To remove the item from the set,
    use Set.prototype.delete
*/
console.log(set1.delete(1) ? 'Deleted' : 'Not deleted');

/*
    { size: <NO_OF_ITEMS_IN_A_SET> }
    Set.prototype.size property will give the number of items in a set
*/
console.log('Number of items in the set: ', set1.size);

/*
    To iterate over the set, we use the for..of loop
*/
for (const item of set1) {
    console.log(item);
}


const arr2 = [
    {
        name: 'John Doe',
        age: 18
    },
    {
        name: 'Jane Doe',
        age: 20
    },
    {
        name: 'Jane Doe Sr',
        age: 22
    },
    {
        name: 'John Doe Sr',
        age: 18
    }
];

/*
    {
        '18': [

        ],
        '20': [

        ],
        '22': [

        ]
    }
*/

const ageSet = new Set();

const result = arr2.reduce((acc, curr) => {
    if (!ageSet.has(curr.age)) {
        ageSet.add(curr.age);
        acc[curr.age] = [curr];
    } 

    else {
        acc[curr.age].push(curr);
    }

    return acc;
}, {});

debugger;