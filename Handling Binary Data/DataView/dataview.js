const buffer = new ArrayBuffer(16);

/*
    To manipulate the underlying memory allocated by
    the ArrayBuffer use the dataview's getter and setter methods
*/
const dataview = new DataView(buffer);

/*
	To set memory 8 bytes at a time
*/
dataview.setUint8(0, 104); // 0 to 2^8 - 1 or 0-255
dataview.setUint8(1, 105);

console.log(dataview.getUint8(0)); // Get the byte at that location 
console.log(dataview.getUint8(1)); // Get the byte at that location 


/*
	To set memory 16 bytes at a time

    dataview.setUint16(0, 104); // 0 to 2^16 - 1

    dataview.getUint16(0); // Get the byte at that location
*/