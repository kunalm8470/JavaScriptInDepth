const buffer = new ArrayBuffer(16);

const uint8Arr = new Uint8Array(buffer);

uint8Arr[0] = 104;
uint8Arr[1] = 105;

console.log(uint8Arr[0]);
console.log(uint8Arr[1]);
