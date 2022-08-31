'use strict';

// Javascript doesn't have concept of class
// Everything is prototype based.
// "class" keyword is just a syntax-sugar.

class Person {
    canWalk = true; // public field
    #canFly = false; // private field, ES10 / 2019+ browser or Node.js 12+
    #usFormattedName;

    constructor(firstName, lastName, age) {
        // Public properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Getter property
    get USFormattedName() {
        return this.#usFormattedName;
    }

    // Setter property
    // Note: Property names should be same
    // Only 1 single argument, i.e value
    set USFormattedName(value) {
        if (!value) {
            throw new Error('USFormattedName cannot be null');
        }

        this.#usFormattedName = value;
    }

    printBasicDetails() {
        console.log(`${this.firstName}, ${this.lastName}: ${this.age}`);
    }
}

/*
    Public fields and public properties are
    accessible in global scope
*/
const j1 = new Person('John', 'Doe', 28);
console.log(`${j1.firstName}, ${j1.lastName}: ${j1.age}`);
console.log(j1.canWalk);

/*
    Private fields are non-enumerable
    (It won't list in the for..in loop / Object.keys)
*/
const keys = Object.keys(j1);


j1.USFormattedName = 'Doe, Jane';
console.log(j1.USFormattedName);

//--------------------------------------------------------------------------

class Car {
    static #fuelCapacity = 50; // Private static field
    yearOfPurchase = 0;

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.fuelLevel = 0;
    }

    refuel(fuelAmount) {
        if ((this.fuelLevel + fuelAmount) > Car.#fuelCapacity) {
            throw new Error('Tank is overflowing');
        }

        this.fuelLevel += fuelAmount;
    }

    // Static methods should be operating on stateless things.
    // Static methods has no this.
    static printMakeAndModel(){
        console.log(`${this.make} - ${this.model}`);
    }

    // Static blocks
    // Use of static blocks is - more than 1 statement which should be marked as static
    // static {
        
    // }
}

const car = new Car('Skoda', 'Rapid');
car.refuel(20);

Car.printMakeAndModel();

//--------------------------------------------------------------------------

/*
    Class based inheritance
    To inherit from a particular class we should use "extends" keyword.
*/
class Employee extends Person {
    constructor(empCode, firstName, lastName, age) {
        // super(...args) will attempt to initialize the
        // base class properties using the appropriate
        // parameterized constructor

        // If not initialized with super keyword in the constructor
        // of derived class, it will throw ReferenceError
        super(firstName, lastName, age);
        
        // Remaining properties, initialize here
        this.empCode = empCode;
    }

    printBasicDetails() {
        super.printBasicDetails();
        console.log(this.empCode);
    }
}

const johnDoeEmployee = new Employee('EMP001', 'John', 'Doe', 28);
johnDoeEmployee.printBasicDetails();

//--------------------------------------------------------------------------

// Inheritance constructor function
function PersonF(name, age) {
    this.name = name;
    this.age = age;
}

PersonF.prototype.printBasicDetails = function() {
    console.log(`${this.name}: ${this.age}`);
};

const j = new PersonF('John Doe', 26);

function EmployeeF(empCode, name, age) {
    PersonF.call(this, name, age);

    this.empCode = empCode;
}

Object.setPrototypeOf(EmployeeF, PersonF.prototype);

const johnDoeEmployeeF = new EmployeeF('EMP0001', 'John Doe', 28);

//------------------------------------------------------------------------

// Class methods is dependent on the 'this' context
class StopWatch {
    timerId;

    constructor(){

    }

    start() {
        timerId = setInterval(() => {
            console.log(new Date());
        }, 1000);
    }

    printArgs(arg) {
        console.log(`arg1: ${this.arg}`);
    }

    stop() {
        clearInterval(timerId);
    }
}

const stopWatch = new StopWatch();
setTimeout(stopWatch.printArgs, 1000, 'aa');

//------------------------------------------------------------------------

// Mixin: Add the functionality without inheriting the class
const greetingMixin = {
    greet() {
        console.log(`Hello ${this.firstName}`);
    }
};

// Copy the methods of greetingMixin to Person
Object.assign(Person.prototype, greetingMixin);

const p = new Person('John', 'Doe', 28);
p.greet();

debugger;