const obj = {
    a: 1,
    b: Math.PI,
    c: function(a, b) { // functions don't get serialized in JS
        return a + b;
    },
    d: new Date(), // ISO 8601 format
    e: /[0-9]/m // {}
};

const stringifiedObj = JSON.stringify(obj);

// 1st parameter object to serialize
// 2nd parameter is reviver parameter -> function of (key, value)
// 3rd parameter is the indent level
const stringifiedObj2 = JSON.stringify(obj, (k, v) => {
    if (typeof v === 'function') {
        console.log("Key", k);
        console.log("Value", v.toString());
        console.log("Omitting the function parameter");
    }
    else {
        return v;
    }
}, 4);

const deserializedObject = JSON.parse(stringifiedObj2);

// JSON.parse doesn't deserialize cyclic properties 
const obj2 = {
    c: function() {
        return this.c();
    }
};

debugger;