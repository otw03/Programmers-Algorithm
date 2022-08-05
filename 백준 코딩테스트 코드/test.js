const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split('\n');

let N = input[0];

let str =`0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz`

let result = str.indexOf(N)

let result2 = result + 48;

console.log(result2);