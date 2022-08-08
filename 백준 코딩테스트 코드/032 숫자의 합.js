const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N = input[0];
let str = input[1];
let sum = 0;

for(let i=0; i < str.length; i++) {
    sum += parseInt(str[i]);
}

console.log(sum);