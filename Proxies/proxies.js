'use strict';

// new Proxy(target, handler);

let obj = {
    hello: 'world',
    __password: 'somesensitivepassword'
};

const alphabetRegex = /A-Za-z/g;

obj = new Proxy(obj, {
    get(target, prop) {
        if (prop.startsWith('__')) {
            throw new Error('Cannot read the private properties');
        }

        return target[prop];
    },

    set(target, prop, val) {
        if (!alphabetRegex.test(prop)) {
            throw new Error('Non alphabetical keys are not allowed!');
        }

        target[prop] = val;
    },

    deleteProperty(target, prop) {
        if (prop.startsWith('__')) {
            throw new Error('Cannot delete the private properties');
        }

        delete target[prop];
        return true;
    },

    ownKeys (target) {
        return Object.keys(target).filter(key => !key.startsWith('__'));
    }
});

//obj[11] = true;
// console.log(obj.__password);
// console.log(delete obj.__password);

console.log(Object.keys(obj));

/*
    new Proxy(targetObj, {
        get: ..., // Called when reading property from object
        set: ..., // Called when writing property from object
        has: ..., // Called when Object.hasOwnProperty will be called
        apply: ..., // Called when Function.prototype.apply will be called
        construct: ..., // Called when function constructor will be called
        defineProperty: ... // Called when Object.defineProperty is called,
        getOwnPropertyDescriptor: ... // Called when Object.getOwnPropertyDescriptor is called
        deleteProperty: ... // delete operator is used on an object
        getPrototypeOf: ... // Called when Object.getPrototypeOf
        setPrototypeOf: ... // Called when Object.setPrototypeOf
        ownKeys: ... // Called when Object.keys is invoked
        isExtensible: ... // Called when Object.isExtensible is invoked
    });
*/

/*

    With the reflect API -

    new Proxy(targetObj, {
        get: Reflect.get, // Called when reading property from object
        set: Reflect.set, // Called when writing property from object
        has: Reflect.has, // Called when Object.hasOwnProperty will be called
        apply: Reflect.apply, // Called when Function.prototype.apply will be called
        construct: Reflect.construct, // Called when function constructor will be called
        defineProperty: Reflect.defineProperty // Called when Object.defineProperty is called,
        getOwnPropertyDescriptor: Reflect.getOwnPropertyDescriptor // Called when Object.getOwnPropertyDescriptor is called
        deleteProperty: Reflect.deleteProperty // delete operator is used on an object
        getPrototypeOf: Reflect.getPropertyOf // Called when Object.getPrototypeOf
        setPrototypeOf: Reflect.setPrototypeOf // Called when Object.setPrototypeOf
        ownKeys: Reflect.ownKeys // Called when Object.keys is invoked
        isExtensible: Reflect.isExtensible // Called when Object.isExtensible is invoked
    });
*/

let obj2 = {
    hello: 'world',
    __password: 'somesensitivepassword'
};

obj2 = new Proxy(obj2, {
    get(target, prop) {
        if (prop.startsWith('__')) {
            throw new Error('Cannot read the private properties');
        }

        return Reflect.get(target, prop);
    },

    set(target, prop, val) {
        if (!alphabetRegex.test(prop)) {
            throw new Error('Non alphabetical keys are not allowed!');
        }

        return Reflect.set(target, prop, val);
    },

    deleteProperty(target, prop) {
        if (prop.startsWith('__')) {
            throw new Error('Cannot delete the private properties');
        }

        return Reflect.deleteProperty(target, prop);
    },

    ownKeys (target) {
        return Object.keys(target).filter(key => !key.startsWith('__'));
    }
});

// -------------------------------------------------------------

// Example 1
const logAllOperationsToObjects = (obj) => {
    return new Proxy(obj, {
        get(target, prop) {
            /*
                Case 1) Azure: Azure App Insights
                Case 2) AWS: CloudWatch
                Case 3) Sentry
                Case 4) console.log
            */
            console.log(`Somebody tried to access key - ${prop}`);

            return Reflect.get(target, prop);
        },

        set(target, prop, val) {
            console.log(`Somebody tried to access key - ${prop}, value - ${val}`);

            return Reflect.set(target, prop, val);
        }
    });
};

let obj3 = {};

obj3 = logAllOperationsToObjects(obj3);

obj3.hello = 'World';
obj3[222] = 444;

console.log(obj.hello);

// Example 2
const observable = (obj, onChange) => {
    return new Proxy(obj, {
        set(target, prop, val) {
            const isSuccess = Reflect.set(target, prop, val);

            if (isSuccess && typeof onChange === 'function') {
                onChange({ key: prop, value: val });
                
                return isSuccess;
            }
        }
    });
};

let obj4 = {
    name: 'John Doe',
    age: 30
};

obj4 = observable(obj4, ({ key, value }) => {
    console.log(`${key} changed to ${value}`);
});

obj4.name = 'Jane Doe';

obj4.age = 27;

debugger;