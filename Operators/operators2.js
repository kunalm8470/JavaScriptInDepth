const a = 1;
const b = a === 1 ? 0 : 2;

const num1 = parseInt('88', 10); // base 10 is decimal numbers
const num2 = parseInt('0010', 2); // base 2 is binary numbers
//2^4 * 0 + 2^3 * 0 + 2 ^ 1 * 1 + 2^0 * 0 = 2
const num3 = parseInt('A', 16); // base 16 is hexadecimal numbers
const num4 = parseInt('3.14159', 10);
const num6 = parseInt('92', 11); // Undefined behaviour (Invalid base)

const num5 = parseFloat('3.14159'); // for float and double numbers

const num7 = (3.14159).toFixed(3); // number -> string conversion, meanwhile it will round up also

const num8 = (3.14159).toPrecision(3); // number -> string conversion, but no rounding up.

const exponentialRes = 2 ** 3; // 2^3, ** exponent operator was introduced in ES6

//----------------------------------------------------------------------------------

const pi = Math.PI;
const absNum = Math.abs(-4);
const sineNum = Math.sinh(30);

const evalResult = eval('2 + 3');

//----------------------------------------------------------------------------------

console.log(0.1 + 0.2 === 0.3);

const epsilonError = 0.3 - (0.1 + 0.2);

// Very small or big numbers are represented using scientific notation
const verySmallNumber = 0.00000000000000000000000000000000000000000000000011112345;


if (verySmallNumber < 0) {
    console.log("Less than zero");
} else {
    console.log("Greater than zero");
}

let someVal = 0;
while (someVal) {
    if (someVal > 3) break;

    someVal++;
}

someVal = 0;

do {
    someVal++;
} while(someVal < 3);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

debugger;