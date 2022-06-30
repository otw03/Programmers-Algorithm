const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let n = parseInt(input[0]);
let sum = 0;

for(let i=1; i<=n; i++){
    sum = sum+i;
}
console.log(sum);