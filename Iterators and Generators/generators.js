'use strict';

/*
    generator will remember the state where it left off previously.

    notable changes - add * before the function name
    and yield the value instead of returning it.
*/
function* generatorfunction() {
    yield 2;
    yield 3;
    yield 4;
}

/*
    regular function will execute top to bottom
*/
function regularfunction() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    return;
}

const generatorobj = generatorfunction();

console.log(generatorobj.next());
console.log(generatorobj.next());
console.log(generatorobj.next());
console.log(generatorobj.next());

/*
    if its implementing the next method, it implicitly can be
    iterated using for..of loop
*/
for (const item of generatorfunction()) {
    console.log(item);
}

/*
    fibonacci nums -
    prev = 0, current = 1

    fetch the first 20 fibonacci numbers
*/
function* fibbonacigenerator(index = 0) {
    // array deconstruction
    let [previous, current] = [0, 1];

    while (true) {
        yield [previous, index++];

        /*
            previous = current;
            current = previous + current;
        */
        [previous, current] = [current, previous + current];
    }
}

const generatefirstnfibonaccinumbers = (n) => {
    const iteratorobj = fibbonacigenerator();

    for (const [currentfibbonacinumber, index] of iteratorobj) {
        if (index >= n) {
            break;
        }

        console.log({
            index,
            currentfibbonacinumber
        });
    }
};

generatefirstnfibonaccinumbers(20);

/*
    memory is not allocated to this generator
    it's generating the values on-fly
*/
function* generatorexamplefunction(start, end) {
    // [0, 10)
    for (let i = start; i < end; i++) {
        yield i;
    }
}

/*
    similar to .tolist()/.toarray on a collection

    spread syntax will force it to collect all generated values in an array.
*/
const collectedelements = [...generatorexamplefunction(0, 1000)];
// don't do this - const collectedelements = [...generatorexamplefunction(0, infinity)];

/*
    We can pass the value from outside to the generator
    using the Generator.prototype.next()
*/
function* passValuesInGeneratorFunction() {
    let result = yield 20;

    console.log(result);

    yield 40;

    console.log(result);

    yield 60;

    console.log(result);
}

const generatorObj1 = passValuesInGeneratorFunction();
let passedValue = true;
for (let i = generatorObj1.next(); i.done === false; i = generatorObj1.next(passedValue)) {
    console.log(i);
}


function* generatorFunction() {
    yield 'a';
    yield 'b';
    yield 'c';
    yield 'd';
}

/*
    Invoking 1 generator function
    inside another we use yield*
*/
function* callingGeneratorFunction(){
    yield* generatorFunction();
}

// 1. Iterate using for..of loop
for (const item of callingGeneratorFunction()) {
    console.log(item);
}

// 2. Force it to an array using spread operator
const generatedValues = [...callingGeneratorFunction()];

debugger;