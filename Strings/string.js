'use strict';

// Strings in JS are UTF-16 encoded
let str1 = 'aaa';

// Cannot mutate the string at a particular index
// str1[0] = 'b';

// Alternative: Change the entire string
str1 = 'baa';

for (let i = 0; i < str1.length; i++) {
    // Accessing the string within the bounds
    console.log(str1[i]);
}

/*
    String.prototype.charAt will give a empty string
    if tried out to access outside the bounds
*/
const outOfBoundIndexChar = str1.charAt(4);

// 0th character is returned for NaN index
const nanIndexChar = str1.charAt(NaN);

// 0th index character is returned Falsy value index
const falsyIndexChar = str1.charAt(undefined);

// 1st index character is returned for Truthy value index
const truthyIndexChar = str1.charAt(true);

// Math.PI -> 3.14159628....
// Math.floor(Math.PI) -> 3.0000000001
// str1.charAt(3.0000000001)
// Will give an empty string, because 3 is out of the bounds
const decimalIndexChar = str1.charAt(
    Math.floor(Math.PI)
);

/*
    To get the Unicode Code Point from a string we use the
    String.prototype.charCodeAt function
*/
const str2 = 'Hello world';

// Print all the code point values in the console
for (let i = 0; i < str2.length; i++) {
    console.log('U+' + str2.charCodeAt(i));
}

// Win + . (Shortcut for Emoji in Windows)
// Emoji will not fit in the Basic Multilingual Plane
const nonBMPFittingCharacter = '😀';

// High surrogate code point + Low surrogate code point
for (let i = 0; i < nonBMPFittingCharacter.length; i++) {
    console.log('U+' + nonBMPFittingCharacter.charCodeAt(i));
}

/*
    String.prototype.fromCodePoint is just the reverse
    of String.prototype.charCodeAt function

    Given a code point value it will convert it into a string.

    Its a static method so call it directly on the String prototype
*/
const reconstructedStringFromCodePoint = String.fromCodePoint(9731);

// Types of strings we can write in Javascript
// 1. Single quoted strings ''
// 2. Double quoted strings "" -> Used in JSON predominantly
// 3. Template literals -> ES6 2015

const singleQuotedString = 'Hello world';

// Put backslash at every line end
// and end the single quote in the last line
const multilineSingleQuotedString = 'Hello \
                                    World \
                                    This is a multiline string';

// If you want to single quote within a single quote
// Escape it with a backslash
const escapedSingleQuotedString = 'I don\'t';

const doubleQuotedString = "Hello world";

// If you want to double quote within a double quote
// Escape it with a backslash
const escapedDoubleQuotedString = "I \"didn't\"";

// Template literal strings are written by backticks
// Any value/expression can be inside the ${}
// Supported in ES6+
const templateLiterals = `Hello 


            ${2 + 2}`;

console.log('Template literal string', templateLiterals);

/*
    To generate a base64 encoded string,
    we use the global function btoa()
*/
const credentials = 'johndoe:qazwsxedc@1234ZZZZZ++++';

const basicToken = btoa(credentials);

const basicAuthToken = `Basic ${basicToken}`;

/*
    To generate a regular UTF-16 encoded string back
    from the base64 encoded string,

    we use the global function atob()
*/
const decodedBasicToken = atob(basicToken);

/*
    encodeURI() is a global function
    it will encode the route parameters if any special character is there.
*/
const urlWithSpecialCharacters = 'http://domainname.com/file with spaces[1].aspx';

// Will be converted into -> http://domainname.com/file%20with%20spaces%5B1%5D.aspx
const encodedUrlWithSpecialCharacters = encodeURI(urlWithSpecialCharacters);

/*
    decodeURI() is a global function and is the exact opposite of encodeURI()

    and it will decode the route parameters.
*/
const decodedUrlWithSpecialCharacters = decodeURI(encodedUrlWithSpecialCharacters);

const urlWithSpecialCharsInQueryParams = 'https://orcadev.securewebserv.com/api/Mobile/Credentials?v=3&page=1&items=200&term=John Doe&sortCol=Username&sortDir=desc';

/*
    encodeURIComponent() is a global function
    it will encode the query parameters
*/
const encodedUrlWithQueryParams = encodeURIComponent(urlWithSpecialCharsInQueryParams);

/*
    decodeURIComponent() is a global function and exact opposite of encodeURIComponent()

    and it will decode the query parameters
*/
const decodeUrlWithQueryParams = decodeURIComponent(encodedUrlWithQueryParams);


const str3 = 'Hello world';

/*
    String.prototype.length will give the length of the string (getter and setter)

    For setting the length ->
    Case 1) In strict mode it will throw the error
    Case 2) If non strict mode -> No effect
*/
for (let i = 0; i < str3.length; i++) {
    console.log(str3[i]);
}

// str3.length = 4;

/*
    To convert between lowercase and uppercase
    we use String.prototype.toLowerCase() and String.prototype.toUpperCase()
*/
const str4 = 'aaweqQQ';
console.log('Lower cased: ', str4.toLowerCase());
console.log('Upper cased: ', str4.toUpperCase());

const whitespaceSurroundedString = '   fjnwekjfn          ';
console.log('Trimmed string', whitespaceSurroundedString.trim());

console.log('Trimming from beginning', whitespaceSurroundedString.trimStart());
console.log('Trimming from end', whitespaceSurroundedString.trimEnd());


/*
    String.prototype.repeat will repeat the input string by a repeating factor

    We should favour using this instead of string concatenation.
*/
const toRepeatString = '*';
const repeatedString = toRepeatString.repeat(10);

/*
    Use the String.prototype.localeCompare when want to implement the Array.prototype.sort comparator
    function.

    1. String to compare
    2. Locale of the browser/Node.js
    3. Options
*/
const str5 = 'a';
const str6 = 'A';
const str7 = 'b';

/*
    if str1 code point is lesser than str2, it will return negative value
    if str1 code point is greater than str2, it will return positive value
    if str1 code point is equal to str2, it will return 0
*/
/*
    sensitivity = base will compare the strings based on the code point of UTF-16 encoding.
*/
const localeComparedValue = str5.localeCompare(str7, 'en', { sensitivity: 'base' });

/*
    senstivity = accent will compare based on the accented characters and diatrical symbols.
*/
const regularCharacter = 'o';
const accentedCharacter = 'ö';

const accentRespectedComparedValue = regularCharacter.localeCompare(accentedCharacter, 'en', { sensitivity: 'accent' });

const variantComparedValue = regularCharacter.localeCompare(accentedCharacter, 'en', { sensitivity: 'variant' });

/*
    { numeric: true } it will respect the numbers inside a string, it will do a natural sorting.
*/
const strArray = [
    'Hello9',
    'Hello0',
    'Hello1',
    'Hello4'
];

strArray.sort((a, b) => {
    return a.localeCompare(b, 'en', { numeric: true });
});

const strArrayWithNumbers = [
    "-1",
    "1",
    "110",
    "0"
];

strArrayWithNumbers.sort((a, b) => {
    return a.localeCompare(b, 'en', { numeric: true });
});

/*
    If you want to find the first found match in a big string.
    Use the String.prototype.indexOf.

    If you want to find the last found match in a big string.
    Use the String.prototype.lastIndexOf.

    These methods will do a direct string match.

    And if matches are not found, it returns -1.
*/
const haystack = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const needle = 'Lorem';

const firstFoundIndex = haystack.indexOf(needle);

const lastFoundIndex = haystack.lastIndexOf(needle);

/*
    Use String.prototype.includes to assert that a specific string is there in the big text.
    true if found, false if not found.

    String.prototype.includes will do a string match
*/
const isTextIncluded = haystack.includes(needle);



const wildcardIterator = haystack.matchAll(/\bLorem\b/g);
for (const match of wildcardIterator) {
    console.log(match);
}

const wildCardMatches = [...haystack.matchAll(/\bLorem\b/g)];

/*
    String.prototype.startsWith asserts whether a given string starts with a string. (Returns true / false)
    String.prototype.endsWith asserts whether a given string ends with a string. (Returns true / false)
*/
const idToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyaWRAbWFpbGluYXRvci5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9hbGxlZ2lvbi1kZXYuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYyNGJmNjExZGRjZjM1MDE0NTE2OTg3MyIsImF1ZCI6Iko0Y24yRVBSZ3NFWnp2UlVLVWw3UDZiUnJNRVNTSUthIiwiaWF0IjoxNjYwNjMwNzQ3LCJleHAiOjE2NjA2NjY3NDd9.84hzsp1g26WbpL2ohf8-RHT-toKSLNRwwcb4XIXiqhg';

const doesStartsWithBearerScheme = idToken.startsWith('Bearer');
const doesEndsWithBearerScheme = idToken.endsWith('Bearer');


const str8 = 'Hello world';

/*
    String.prototype.slice will fetch the substring between 0 based start and end indices.
*/
// [0, 5)
const greeting = str8.slice(0, 5);

/*
    String.prototype.substring will fetch the substring between 0 based start and end indices.
*/
const greeting2 = str8.substring(0, 5);

/*
    String.prototype.substr will fetch the substring based on -
    1. Starting value
    2. Offset
*/
const greeting3 = str8.substr(0, 0 + 5);

debugger;