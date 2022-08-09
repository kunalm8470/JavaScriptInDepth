const process = require('process');


const today = new Date();

console.log("No of milliseconds elapsed from 1 Jan 1970", Date.now()); // Can invoke on the Date function directly
console.log("No of milliseconds elapsed from 1 Jan 1970", today.getTime()); // Instance method

/*
    Use the date constructor when converting from string/number/another date
    Use the parse method only when converting from strings
*/
const todayParsed1 = new Date(today.toString()); // Pass string representation of dates into date constructor
const todayParsed2 = Date.parse(today.toString()); // Pass string representation of dates using Date.prototype.parse

// Getter of dates
const currentYear = today.getFullYear();
const currentMonth = today.getMonth(); // Will give 0 based month index (Jan - 0, Feb - 1, ... , Dec - 11)
const currentDay = today.getDate();

// Getter of time
const currentHour = today.getHours();
const currentMinute = today.getMinutes();
const currentSecond = today.getSeconds();
const currentMillisecond = today.getMilliseconds();

// Setter of dates
const d = new Date();
// All set methods will mutable 
d.setFullYear(
    d.getFullYear() + 5  // Don't give offset directly
                         // Get current year add the offset
);

d.setMonth(
    d.getMonth() + 4
);

d.setDate(
    d.getDate() + 13
);


// Setter of times
const d1 = new Date();
d1.setHours(
    d1.getHours() + 3
);

d1.setMinutes(
    d1.getMinutes() + 5
);


d1.setSeconds(
    d1.getSeconds() + 4
);

d1.setMilliseconds(
    d1.getMilliseconds() + 200
);


// Format the date
const today2 = new Date();
console.log("Print only the date part (locale specific)", today2.toDateString());
console.log("Print only the time part (locale specific)", today2.toTimeString());

// If you want to send date in UTC format in ISO-8601 format
console.log("Print the date in ISO-8601 format", today2.toISOString());
console.log("Print the JSON equivalent of the date", today2.toJSON());

console.log("Print the date and time in a (locale specific)", today2.toLocaleString());


// International date time formatting
const options = {
    // Date parts
    year: 'numeric', // If you want to display it in full use numeric, else use "2-digit",
    month: '2-digit',
    day: '2-digit',

    // Time parts
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // 12 hour format is set to false (i.e Show 24 hour format)
};

// 19/07/2022 - BIS
const indiaDate = new Intl.DateTimeFormat('en-IN', options).format(today);

// FIPS/NIST
const usDate = new Intl.DateTimeFormat('en-US', options).format(today);

const germanDate = new Intl.DateTimeFormat('de-DE', options).format(today);


// High precision timer targetting both Browser and Node.js
const dStart = performance.now();

// Measure your code here

const dEnd = performance.now();

const elapsed = dEnd - dStart;



// -2^53 to 2^53 - 1
// Specifically targetting server side (Node.js)
const pStart = process.hrtime.bigint();

// Measure your code here

const pEnd = process.hrtime.bigint();

const tenRaisedToSix = BigInt(Math.pow(10, 6));

const pElapsed = (pEnd - pStart) / tenRaisedToSix;

debugger;
