const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

// console.log(input);
const N = input.shift();
// console.log(input);

input.sort(
  (a, b) =>
    parseInt(a.split(' ')[0]) - parseInt(b.split(' ')[0]) || parseInt(a.split(' ')[1]) - parseInt(b.split(' ')[1])
);
// console.log(input);
console.log(input.join('\n'));
