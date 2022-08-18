'use strict';

const obj = {};

const obj1 = { name: 2 };

/*
    Key stored here is [Object object]
    Because obj1 is typecasted to string [Object object]
*/
obj[obj1] = 2;

/*
    To define a map we use the map constructor
*/
const map = new Map();

/*
    Each subarray is an entry in the map
    We can initialize the map using pre-defined values.
*/
const initializedMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);

/*
    To add an entry in the map
    we use Map.prototype.set
*/
map.set('key1', 'value1');
map.set(obj1, 'value2');

/*
    To get an entry given a key
    we use the Map.prototype.get method

    Return a value if its present,
    if not present it will return undefined (falsy value)
*/
const val = map.get(obj1);

/*
    To check the existence of an item in the map
    we use Map.prototype.has

    true if the key is there, false if its not there
*/
console.log(map.has({ name: 222 }) ? 'Key present' : 'Key not present');

/*
    To delete an entry by the key, we use 
    Map.prototype.delete
*/
initializedMap.delete('key2');

/*
    To delete all the items from a map
    use Map.prototype.clear()
*/
initializedMap.clear();

/*
    To get the number of entries in a map
    we use Map.prototype.size (property)
*/
console.log('Number of entries in the map', map.size);

debugger;