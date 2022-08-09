'use strict';

// Literal notation for regex
// Use case: When you know your regex before hand
// Literals regex are compiled by the Javascript regex engine
const firstRegex = /0-9/gm;

// Use dynamic regex when regex is not known beforehand
// Passing the regex string to the RegExp constructor function will compile it.
let dynamicRegex = '';

// Chooses digits only
const digitsRegex = '\d';

// Chooses letters only
const lettersRegex = '[A-Za-z]';

// Chooses special characters only
const specialCharsRegex = '[!@#$%^&*()]';

// Join by the alternation | metacharacter
dynamicRegex = [digitsRegex, lettersRegex, specialCharsRegex].join('|');

const genericRegex = new RegExp(dynamicRegex, 'gm');


const dummyUppercasePAN = 'AAAPZ1234C';
const dummyLowercasePAN = 'aaapz1234c';

const panRegex = /[a-z]{3}(?<type_of_holder>[abcfghljpt])([a-z])\d{4}[a-z]/gi;

const matched1 = panRegex.test(dummyUppercasePAN);
const matched2 = panRegex.test(dummyLowercasePAN);

/*
    1. Minimum 1 lowercase character
    2. Minimum 1 uppercase character
    3. Minimum 1 digit
    4. Minimum 1 special character
    5. Minimum password length is 8
*/
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])(?:.{8,})/g;

const password1 = 'qazwsx@234567890ZZ_';

/*
    RegExp.prototype.test will return a boolean value if a match is found
    true if found, false if not found
*/
const isMatchedPassword = passwordRegex.test(password1);

const text = 'Hello world 11 message 22';
const text1 = 'Hello world';

/*
    Use String.prototype.search gives the matched index

    if found, it will give a valid index
    if not, -1
*/
const matchedIndex = text.search(/d/);
const matchedIndex1 = text1.search(/d/);



let result;
const numbersRegex = /\d+/g;

const digitsResult = [];

// O(1)
/*
    RegExp.prototype.exec will iteratively match the pattern
    and stored pattern we should assign in a while loop
    and checked if its null or not.

    .lastIndex property will get mutated after every match
*/
while ((result = numbersRegex.exec(text)) !== null) {
    digitsResult.push(result);
}

/*
    String.prototype.match is a newer alternative to RegExp.prototype.exec()
    and it will do null checking and iterating and directly
    return the array of matched values.

    .lastIndex property will not be mutated after every match
*/
const matchedValues2 = text.match(numbersRegex);

/*
    String.prototype.matchAll is a newer alternative to RegExp.prototype.exec()
    and it will do null checking and iterating and directly
    return the iterator of matched values.

    Imp: If no global flag /g, matchAll will throw an exception

    .lastIndex property will not be mutated after every match

    [
        match -> 1st item
        index -> 2nd item
        captured group -> 3rd item
        entire text (input) -> 4th item
    ]
*/
for (const matchedValue of text.matchAll(numbersRegex)) {
    console.log(matchedValue);
}

const bearerToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmFsaS1pbnRlZ3JhdGlvbjNAbWFpbGluYXRvci5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vYWxsZWdpb24tZGV2LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MDljZjI4ZDljMTAwZjAwNmE4MzU5MzUiLCJhdWQiOiJKNGNuMkVQUmdzRVp6dlJVS1VsN1A2YlJyTUVTU0lLYSIsImlhdCI6MTY1OTkzMjU2NiwiZXhwIjoxNjU5OTY4NTY2fQ.62te4E7x-utWErP0v_fUyzbfe1EYddoh36NmeSqKbSA';

const bearerTokenRegex = /Bearer\s(?<id_token>.+)/g;

for (const matchedValue of bearerToken.matchAll(bearerTokenRegex)) {
    console.log(matchedValue);
}

const iteratorToArray1 = Array.from(bearerToken.matchAll(bearerTokenRegex));
const iteratorToArray2 = [...bearerToken.matchAll(bearerTokenRegex)];

const text2 = `
    Doe, John,
    Doe, Jane
`;

const replaceSearchRegex = /(?<last_name>[A-Za-z]{1,})(,\s)(?<first_name>[A-Za-z]{1,})/g;

/*
    We can do substitution of text using String.prototype.replace

    1st parameter is the regex
    2nd parameter is the replacer function
        - match (Entire matched text)
        - group1 1st captured group
        - group2 2nd captured group
        - group3 3rd captured group
*/
const replacedText = text2.replace(replaceSearchRegex, (match, group1, group2, group3) => {
    return `${group3}${group2}${group1}`;
});

debugger;
