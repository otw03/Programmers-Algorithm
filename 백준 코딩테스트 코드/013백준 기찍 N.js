const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = parseInt(input[0]);
let temp = "";

for(let i=0; i<N; i++){
    temp = temp+(N-i)+"\n";
}
console.log(temp);